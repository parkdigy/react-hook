declare const plugin: {
    rules: {
        'exhaustive-deps': {
            create(context: any): {
                CallExpression(node: any): void;
            };
            meta: {
                type: "suggestion";
                docs: {
                    description: string;
                    recommended: true;
                    url: string;
                };
                fixable: "code";
                hasSuggestions: true;
                schema: {
                    type: "object";
                    additionalProperties: false;
                    enableDangerousAutofixThisMayCauseInfiniteLoops: boolean;
                    properties: {
                        additionalHooks: {
                            type: "string";
                        };
                        enableDangerousAutofixThisMayCauseInfiniteLoops: {
                            type: "boolean";
                        };
                        experimental_autoDependenciesHooks: {
                            type: "array";
                            items: {
                                type: "string";
                            };
                        };
                        requireExplicitEffectDeps: {
                            type: "boolean";
                        };
                    };
                }[];
            };
        };
        'rules-of-hooks': {
            meta: {
                type: "problem";
                docs: {
                    description: string;
                    recommended: true;
                    url: string;
                };
                schema: {
                    type: "object";
                    additionalProperties: false;
                    properties: {
                        additionalHooks: {
                            type: "string";
                        };
                    };
                }[];
            };
            create(context: import("eslint").Rule.RuleContext): {
                "*"(node: any): void;
                "*:exit"(node: any): void;
                CallExpression(node: import("estree").CallExpression & import("eslint").Rule.NodeParentExtension): void;
                Identifier(node: import("estree").Identifier & import("eslint").Rule.NodeParentExtension): void;
                "CallExpression:exit"(node: import("estree").CallExpression & import("eslint").Rule.NodeParentExtension): void;
                FunctionDeclaration(node: import("estree").FunctionDeclaration & import("eslint").Rule.NodeParentExtension): void;
                ArrowFunctionExpression(node: import("estree").ArrowFunctionExpression & import("eslint").Rule.NodeParentExtension): void;
            };
        };
    };
    configs: {
        recommended: {
            plugins: "@pdg/react-hooks"[];
            rules: {
                '@pdg/react-hooks/rules-of-hooks': "error";
                '@pdg/react-hooks/exhaustive-deps': "error";
            };
        };
    };
};
export default plugin;
