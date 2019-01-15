module.exports = {
    "parser": "eslint-plugin-typescript/parser",
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:typescript/recommended",
        "prettier",
        "prettier/react",
        "prettier/typescript"
    ],
    "plugins": [
        "react",
        "typescript",
    ],
    "rules": {
        "no-unused-vars": "off",
        "react/prop-types": "off",
        "typescript/no-use-before-define": ["error", {
            "classes": false,
            "functions": false,
            "variables": false,
        }],
        "typescript/no-unused-vars": "error",
        "typescript/no-empty-interface": "off",
        "typescript/explicit-function-return-type": "off",
        "typescript/array-type": ["error", "array-simple"],
        "typescript/interface-name-prefix": ["error", "always"],
        "no-console": ["error", {
            "allow": ["warn", "error"]
        }],

        // TODO: bug in this rule for extended interfaes
        "typescript/no-unused-vars": "off",
    },
    "env": {
        "amd": true,
        "es6": true,
        "browser": true,
        "mocha": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "settings": {
        "react": {
            "version": "16.3"
        }
    }
}
