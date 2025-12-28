import reactHooksPlugin from 'eslint-plugin-react-hooks';

const plugin = {
  rules: {
    'exhaustive-deps': {
      ...reactHooksPlugin.rules['exhaustive-deps'],
      create(context: any) {
        const originalRule = reactHooksPlugin.rules['exhaustive-deps'].create(context);

        return {
          ...originalRule,
          CallExpression(node: any) {
            const callbackName = node.callee.name;

            if (callbackName === 'useChanged') {
              const fakeNode = {
                ...node,
                arguments: [{ type: 'Literal', value: null }, node.arguments[0]],
              };
              return originalRule.CallExpression(fakeNode);
            }

            return originalRule.CallExpression(node);
          },
        };
      },
    },
    'rules-of-hooks': reactHooksPlugin.rules['rules-of-hooks'],
  },
  configs: {
    recommended: {
      plugins: ['@pdg/react-hooks'],
      rules: {
        '@pdg/react-hooks/rules-of-hooks': 'error',
        '@pdg/react-hooks/exhaustive-deps': 'error',
      },
    },
  },
};

export default plugin;
