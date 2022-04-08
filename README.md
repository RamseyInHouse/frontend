# Ramsey Solutions Frontend

Ramsey Solutions Frontend configurations and standards.

We also recommend using [Prettier](https://prettier.io/) for formatting code in frontend repositories, but we use the default settings so there's no config file needed.

## Packages

Packages are published to npm within the [`ramseyinhouse`](https://www.npmjs.com/org/ramseyinhouse) organization.

### ESlint

[![npm version](https://badge.fury.io/js/%40ramseyinhouse%2Feslint-config.svg)](https://badge.fury.io/js/%40ramseyinhouse%2Feslint-config)

[`@ramseyinhouse/eslint-config`](./packages/eslint-config/README.md)

### Stylelint

[![npm version](https://badge.fury.io/js/%40ramseyinhouse%2Fstylelint-config.svg)](https://badge.fury.io/js/%40ramseyinhouse%2Fstylelint-config)

[`@ramseyinhouse/stylelint-config`](./packages/stylelint-config/README.md)

## About

This repository contains multiple packages managed through [Lerna](https://lerna.js.org/).

Package versions are automatically published to [npm](https://www.npmjs.com/org/ramseyinhouse) via [Github Actions](./.github/workflows/main.yml) as they are updated.

## Contributing

### New Packages

**To create a brand new package:**

1. Run the `lerna create` command to create a new Lerna managed package.
2. Ensure that the `private` property is set to `true` before the package is ready for publication.

Once ready for publication to npm:

1. Open a feature branch for your release.
2. Remove the `"private": true` property from the `package.json` file.
3. Perform a [new release](#new-release).

### New Releases

**To publish a new release:**

1. Create a feature branch and push it to the origin.
2. Run the following command:

```bash
yarn run release
```

_The `release` command will allow you to interactively update the `package.json` version(s) based on the scope of recent changes. A commit will be created and pushed automatically._

3. Open a pull request. Once merged, the new package version(s) will be published to npm automatically.
