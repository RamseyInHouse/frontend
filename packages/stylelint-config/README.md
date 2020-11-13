# `@ramseyinhouse/stylelint-config`

The official [styleint](https://stylelint.io/) configuration for [Ramsey Solutions](https://ramseyinhouse.com/).

Support for [Prettier](https://www.npmjs.com/package/prettier-eslint) is pre-configured out of the box.

## Expected Dependencies

- [`stylelint`](https://www.npmjs.com/package/stylelint)
- [`prettier`](https://www.npmjs.com/package/prettier) - Though not strictly required, this config relies on `prettier` to enforce many stylistic rules.

## Installation

Install `stylelint` and `prettier` as `devDependencies` if you have not already:

```
yarn add stylelint prettier --dev
```

Install `@ramseyinhouse/stylelint-config`:

```
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
