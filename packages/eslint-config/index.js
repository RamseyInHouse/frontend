module.exports = {
  extends: [require.resolve('./rules'), 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
};
