# Ramsey Solutions babel-preset-ramsey

## How to use [Babel](https://babeljs.io/) and the Ramsey Solutions preset in your project

### Required Dependencies
- [@babel/cli 7.0.0+](https://www.npmjs.com/package/@babel/cli)
- [@babel/core 7.0.0+](https://www.npmjs.com/package/@babel/core)
- [@ramsey/browserslist-config]()
- [core-js 3+](https://www.npmjs.com/package/core-js)

Add the preset to your development dependencies
```
yarn add dev @ramsey/babel-preset-ramsey
```

Ensure you have a `babel.config.json` file at the root of your project.
To follow our dev standards, use the preset instead of @babel/preset-env

```jsonc
// babel.config.json

{
  "presets": ["@ramsey/babel-preset"]
}
```

### What is included in the preset?
The preset adds `@babel/preset-env` with a few the following settings to ensure we're supporting the browserslist configuration:
```json
{
  "useBuiltIns": "usage",
  "corejs": 3
}
```
