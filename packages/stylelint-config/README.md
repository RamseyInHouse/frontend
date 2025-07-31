# `@ramseyinhouse/stylelint-config`

The official [stylelint](https://stylelint.io/) configuration for [Ramsey Solutions](https://ramseyinhouse.com/).

## Version 4.0.0 - Stylelint v16+ Support

This version has been updated for compatibility with **Stylelint v16+** and includes breaking changes:

- **Removed `stylelint-config-prettier`**: No longer needed as stylistic rules were removed from Stylelint v15+
- **Removed deprecated stylistic rules**: `string-quotes` and `function-parentheses-space-inside`
- **Updated dependencies**: Now requires Stylelint v16.23.0 or higher
- **Prettier integration**: Formatting is now handled entirely by Prettier (peer dependency)

## Expected Dependencies

- [`stylelint`](https://www.npmjs.com/package/stylelint) >= 16.23.0
- [`prettier`](https://www.npmjs.com/package/prettier) >= 3.2.5 - **Required** for code formatting (stylistic rules removed from Stylelint)

## Installation

Install `stylelint` and `prettier` as `devDependencies` if you have not already:

```bash
yarn add stylelint prettier --dev
```

Install `@ramseyinhouse/stylelint-config`:

```bash
yarn add @ramseyinhouse/stylelint-config --dev
```

## Usage

[Configure](https://stylelint.io/user-guide/configure) stylelint to extend `@ramseyinhouse/stylelint-config`.

1. Add a `stylelint.config.js` (or [other supported file format](https://stylelint.io/user-guide/configure)) to the root of your project.
2. Extend `@ramseyinhouse/stylelint-config` via the `extends` property:

```js
module.exports = {
  extends: ['@ramseyinhouse/stylelint-config'],
};
```
