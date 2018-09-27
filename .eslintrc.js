module.exports = {
  "env": {
    "browser": true,
    "jest": true
  },
  "extends": [
    "standard",
    "standard-react",
    "prettier"
  ],
  "parser": "babel-eslint",
  "rules": {
    "react/prop-types": 0,
    "class-methods-use-this": 0,
    "import/no-named-as-default": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
};
