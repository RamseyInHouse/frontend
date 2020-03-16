# Ramsey Solutions eslint configuration

## [ESLint](https://eslint.org/)

### Installation

```
yarn add dev eslint @ramsey/eslint-config babel-eslint
```

### Required Dependencies

- [eslint](https://www.npmjs.com/package/eslint)

### Usage

[Configure](https://eslint.org/docs/user-guide/configuring/) ESLint to extend the Ramsey ESLint configuration by adding a `.eslintrc` to the root of your project. ESLint automatically looks for a config file at that location, so this setup should work both in editors and from the CLI. The contents of your config file should look like this:

```json
{
  "extends": "@ramsey/eslint-config"
}
```
The Ramsey ESLint config provides a base set of rules for ESLint. Your project can add additional rules as needed to the `.eslintrc` file.

Example:
```jsonc
{
  "extends": "@ramsey/eslint-config",
  "env": {
    // Use additional environments (jQuery, Jasmine, etc.)
    "es2020": true,
    "node": true
  },
  "rules": {
    // Add additional rules
    "react/jsx-uses-react": 2
  }
}
```
