# `@ramseyinhouse/eslint-config`

The official [ESLint](https://eslint.org/) configuration for [Ramsey Solutions](https://ramseyinhouse.com/).

Support for [Babel](https://www.npmjs.com/package/@babel/eslint-parser) and [Prettier](https://www.npmjs.com/package/prettier-eslint) is pre-configured out of the box.

## Expected Dependencies

- [`eslint`](https://www.npmjs.com/package/eslint)
- [`prettier`](https://www.npmjs.com/package/prettier) - Though not strictly required, this config relies on `prettier` to enforce many stylistic rules.

## Installation

Install `eslint` and `prettier` as `devDependencies` if you have not already:

```
yarn add eslint prettier --dev
```

Install `@ramseyinhouse/eslint-config`:

```
yarn add @ramseyinhouse/eslint-config --dev
```

## Usage

[Configure](https://eslint.org/docs/user-guide/configuring/) ESLint to extend `@ramseyinhouse/eslint-config`.

1. Add a `.eslintrc.js` (or [other supported file format](https://eslint.org/docs/user-guide/configuring#configuration-file-formats)) to the root of your project.
2. Extend `@ramseyinhouse` via the `extends` property:

```js
module.exports = {
  extends: ['@ramseyinhouse'],
};
```
