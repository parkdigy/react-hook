'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactHooksPlugin = require('eslint-plugin-react-hooks');

const plugin = {
    rules: {
        'exhaustive-deps': Object.assign(Object.assign({}, reactHooksPlugin.rules['exhaustive-deps']), { create(context) {
                const originalRule = reactHooksPlugin.rules['exhaustive-deps'].create(context);
                return Object.assign(Object.assign({}, originalRule), { CallExpression(node) {
                        const callbackName = node.callee.name;
                        if (callbackName === 'useChanged') {
                            const fakeNode = Object.assign(Object.assign({}, node), { arguments: [{ type: 'Literal', value: null }, node.arguments[0]] });
                            return originalRule.CallExpression(fakeNode);
                        }
                        return originalRule.CallExpression(node);
                    } });
            } }),
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

exports.default = plugin;
