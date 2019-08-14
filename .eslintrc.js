module.exports = {
    "extends": "airbnb-base",
    "env":{
        "browser": true,
        "es6": true
    },
    "plugins": [
        "fp",
    ],
    "rules":{
        "indent": ["warn", "tab"],
        "no-console": "off",
        "no-tabs": "off",
        "max-len": [1, 150],
        "no-plusplus": "off",
        "max-lines": ["warn", 200],
        "max-lines-per-function": ["warn", 20],
        "complexity": ["warn", 5],
        "max-nested-callbacks": ["warn", 2],
        "max-depth": ["warn", 3],
        "no-param-reassign": "warn",
        "fp/no-mutating-assign": "warn",
        "fp/no-mutating-methods": "warn",
        "fp/no-mutation": "warn",
        "fp/no-let": "warn",
        "fp/no-this": "warn",
        "fp/no-loops": "warn",
        "fp/no-delete": "warn",
        "fp/no-throw": "warn",
        "max-params": ["warn", 2],
    },
};
