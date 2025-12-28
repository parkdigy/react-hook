import reactHooksPlugin from 'eslint-plugin-react-hooks';

const plugin = {
    rules: {
        'exhaustive-deps': Object.assign(Object.assign({}, reactHooksPlugin.rules['exhaustive-deps']), { create(context) {
                const originalRule = reactHooksPlugin.rules['exhaustive-deps'].create(context);
                return Object.assign(Object.assign({}, originalRule), { CallExpression(node) {
                        const callbackName = node.callee.name;
                        if (callbackName === 'useChanged') {
                            const depsNode = node.arguments[0];
                            if (!depsNode || depsNode.type !== 'ArrayExpression') {
                                context.report({
                                    node: node.callee, // useChanged 함수 이름 위치에 표시
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
                        return originalRule.CallExpression(node);
                    } });
            } }),
        'rules-of-hooks': reactHooksPlugin.rules['rules-of-hooks'],
    },
};
plugin.config = {
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
                '@pdg/react-hooks': plugin,
            },
            rules: {
                '@pdg/react-hooks/rules-of-hooks': 'error',
                '@pdg/react-hooks/exhaustive-deps': 'error',
            },
        },
    },
};

export { plugin as default };
