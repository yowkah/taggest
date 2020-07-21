module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: [
    'vue',
  ],
  rules: {
    "max-len": [
      "error", 
      {
        "code": 150
      }
    ],
    "vue/max-len": [
      "error", {
        "ignoreHTMLAttributeValues": true,
      }
    ]
  },
};
