module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    // "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error", 2, { "FunctionDeclaration": {"body": 1, "parameters": 2} }
        ],
        "no-var": "error",
        "no-console": 0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
