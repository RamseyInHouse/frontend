# Ramsey Solutions prettier configuration

## [Prettier](https://prettier.io/)

### Installation

```
yarn add dev prettier @ramsey/prettier-config
```

### Required Dependencies:

- [prettier](https://www.npmjs.com/package/prettier)

### Usage

[Configure](https://prettier.io/docs/en/configuration.html) Prettier to extend the Ramsey Prettier configuration by adding a `.prettierrc.json` to the root of your project. Prettier automatically looks for a config file at that location, so this setup should work both in editors and from the CLI. The contents of your config file should look like this:

```json
"@ramsey/prettier-config"
```

Prettier formatting SHOULD be enforced through the use of a pre-commit hook. See the [prettier documentation](https://prettier.io/docs/en/precommit.html) for guidance on generating a hook via [husky](https://github.com/typicode/husky).
