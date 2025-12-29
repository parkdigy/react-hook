import reactHooksPlugin from 'eslint-plugin-react-hooks';

const pluginRules = {
    rules: {
        'exhaustive-deps': Object.assign(Object.assign({}, reactHooksPlugin.rules['exhaustive-deps']), { create(context) {
                const originalRule = reactHooksPlugin.rules['exhaustive-deps'].create(context);
                return Object.assign(Object.assign({}, originalRule), { CallExpression(node) {
                        const callbackName = node.callee.name;
                        /** useChanged */
                        if (callbackName === 'useChanged') {
                            const depsNode = node.arguments[0];
                            if (!depsNode || depsNode.type !== 'ArrayExpression') {
                                context.report({
                                    node: node.callee,
                                    message: 'useChanged 훅의 첫 번째 인자는 반드시 배열 리터럴(예: [a, b]) 형태여야 합니다.',
                                });
                                return;
                            }
                            const elements = depsNode.elements.filter((e) => e && e.type === 'Identifier');
                            const fakeCallback = {
                                type: 'ArrowFunctionExpression',
                                expression: false,
                                generator: false,
                                async: false,
                                params: [],
                                body: {
                                    type: 'BlockStatement',
                                    body: elements.map((el) => ({
                                        type: 'ExpressionStatement',
                                        expression: el,
                                    })),
                                },
                            };
                            const fakeNode = Object.assign(Object.assign({}, node), { arguments: [fakeCallback, depsNode] });
                            return originalRule.CallExpression(fakeNode);
                        }
                        /** useFirstSkipEffect */
                        if (callbackName === 'useFirstSkipEffect') {
                            const deps = node.arguments[1];
                            if (!deps || deps.type !== 'ArrayExpression') {
                                context.report({
                                    node: node.callee,
                                    message: 'useFirstSkipEffect 훅의 두 번째 인자는 반드시 배열 리터럴(예: [a, b]) 형태여야 합니다.',
                                });
                                return;
                            }
                            return originalRule.CallExpression(node);
                        }
                        /** useEventEffect */
                        if (callbackName === 'useEventEffect') {
                            const deps = node.arguments[1];
                            if (deps && deps.type !== 'ArrayExpression') {
                                context.report({
                                    node: node.callee,
                                    message: 'useEventEffect 훅의 두 번째 인자는 반드시 배열 리터럴(예: [a, b]) 형태여야 합니다.',
                                });
                                return;
                            }
                            return originalRule.CallExpression(node);
                        }
                        return originalRule.CallExpression(node);
                    } });
            } }),
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

export { plugin as default };
