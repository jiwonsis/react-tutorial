// yarn -D add babel-eslint eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react

module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module",
        "ecmaFeatuers": {
            "jsx": true,
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }

};