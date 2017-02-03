module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "mocha"
    ],
    "ecmaFeatures": { 
        "jsx": true 
    },
    "rules": {
        "indent": ["error",2],
        "linebreak-style": ["error","unix"],
        "quotes": [1,"single"],
        "semi": ["error", "always"],
        "mocha/no-exclusive-tests": "error",
        "no-trailing-spaces": ["error", { "skipBlankLines": true }]
    }
};
