import reactHooksPlugin from 'eslint-plugin-react-hooks';

const pluginRules = {
  rules: {
    'exhaustive-deps': {
      ...reactHooksPlugin.rules['exhaustive-deps'],
      create(context: any) {
        const originalRule = reactHooksPlugin.rules['exhaustive-deps'].create(context);

        return {
          ...originalRule,
          CallExpression(node: any) {
            const callbackName = node.callee.name;

            /** useChanged, useFirstSkipChanged */
            if (['useChanged', 'useFirstSkipChanged'].includes(callbackName)) {
              const callback = node.arguments[0];
              const deps = node.arguments[1];

              if (!deps || deps.type !== 'ArrayExpression') {
                context.report({
                  node: deps || node,
                  message: `${callbackName} 훅의 두 번째 인자는 반드시 배열 리터럴(예: [a, b]) 형태여야 합니다.`,
                });
                return;
              }

              if (callback && (callback.type === 'ArrowFunctionExpression' || callback.type === 'FunctionExpression')) {
                const visited = new Set();

                const checkRefAccess = (targetNode: any) => {
                  if (!targetNode || typeof targetNode !== 'object' || visited.has(targetNode)) return;

                  visited.add(targetNode);

                  if (
                    targetNode.type === 'MemberExpression' &&
                    targetNode.property &&
                    (targetNode.property.name === 'current' ||
                      (targetNode.property.type === 'Literal' && targetNode.property.value === 'current'))
                  ) {
                    context.report({
                      node: targetNode,
                      message: `${callbackName} 훅의 콜백에서는 ref를 참조할 수 없습니다. (Cannot access refs during render.)`,
                    });
                  }

                  for (const key in targetNode) {
                    if (key === 'parent') continue;

                    const child = targetNode[key];
                    if (Array.isArray(child)) {
                      child.forEach((c) => checkRefAccess(c));
                    } else if (child && typeof child === 'object') {
                      checkRefAccess(child);
                    }
                  }
                };

                checkRefAccess(callback.body);
              }

              return originalRule.CallExpression(node);
            }

            /** useEventEffect, useEventLayoutEffect */
            if (['useEventEffect', 'useEventLayoutEffect'].includes(callbackName)) {
              const deps = node.arguments[1];

              if (deps && deps.type !== 'ArrayExpression') {
                context.report({
                  node: deps || node,
                  message: `${callbackName} 훅의 두 번째 인자는 반드시 배열 리터럴(예: [a, b]) 형태여야 합니다.`,
                });
                return;
              }

              return originalRule.CallExpression(node);
            }

            /** useFirstSkipEffect, useFirstSkipLayoutEffect */
            if (['useFirstSkipEffect', 'useFirstSkipLayoutEffect'].includes(callbackName)) {
              const deps = node.arguments[1];

              if (!deps || deps.type !== 'ArrayExpression') {
                context.report({
                  node: deps || node,
                  message: `${callbackName} 훅의 두 번째 인자는 반드시 배열 리터럴(예: [a, b]) 형태여야 합니다.`,
                });
                return;
              }

              return originalRule.CallExpression(node);
            }

            return originalRule.CallExpression(node);
          },
        };
      },
    },
    'rules-of-hooks': reactHooksPlugin.rules['rules-of-hooks'],
  },
};

const plugConfig = {
  recommended: {
    plugins: ['@pdg/react-hooks'],
    rules: {
      '@pdg/react-hooks/rules-of-hooks': 'error',
      '@pdg/react-hooks/exhaustive-deps': 'error',
    },
  },
  flat: {
    recommended: {
      plugins: {
        '@pdg/react-hooks': pluginRules,
      },
      rules: {
        '@pdg/react-hooks/rules-of-hooks': 'error',
        '@pdg/react-hooks/exhaustive-deps': 'error',
      },
    },
  },
};

const plugin = {
  rules: pluginRules.rules,
  configs: plugConfig,
};

export default plugin;
