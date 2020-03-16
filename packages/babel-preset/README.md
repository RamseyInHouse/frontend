# Ramsey Solutions Babel Preset

## How to use [Babel](https://babeljs.io/) and the Ramsey Solutions preset in your project

### Installation

```
yarn add dev @babel/core @babel/cli @ramsey/babel-preset-ramsey
```

### Required Dependencies
- [@babel/core 7.0.0+](https://www.npmjs.com/package/@babel/core)
- [@babel/cli 7.0.0+](https://www.npmjs.com/package/@babel/cli) (If you plan to use `babel` in your build script)

### Usage
[Configure](https://babeljs.io/docs/en/configuration) Babel to extend the Ramsey Babel preset by adding a `babel.config.json` to the root of your project ([This is the Babel recommended way](https://babeljs.io/docs/en/configuration#whats-your-use-case)). Babel automatically looks for the config file. The contents of your config file should look like this:

```json
{
  "extends": "@ramsey/eslint-config"
}
```

### What is included in the preset?
The preset adds `@babel/preset-env` with the following settings to ensure we're supporting the browsers in our browserslist configuration:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ]
}
```
