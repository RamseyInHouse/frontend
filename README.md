# Ramsey Solutions Frontend

Ramsey Solutions Frontend configurations and standards.

## Packages

### ESlint

[`@ramseyinhouse/eslint-config`](./packages/eslint-config/README.md)

## Contributing

### New Releases

To publish a new release:

1. Create a feature branch.
2. Run the following command:

```bash
yarn && yarn run release
```

_**Note:** The `release` command will increase `package.json` version(s) based on the scope of recent changes. A commit will be made automatically._

3. Push the feature branch, and open a pull request. Once merged, the new package version(s) will be published to NPM automatically via GitHub Actions.
