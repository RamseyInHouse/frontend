# Ramsey Solutions stylelint-config

## [Stylelint](https://stylelint.io/)

### Installation

```
yarn add dev stylelint @ramsey/stylelint-config
```

### Required Dependencies:

- [stylelint](https://www.npmjs.com/package/stylelint)

### Usage

[Configure](https://stylelint.io/user-guide/configuration/) Stylelint to extend the Ramsey Stylelint configuration by adding a `.stylelintrc` to the root of your project. Stylelint automatically looks for a config file at that location, so this setup should work both in editors and from the CLI. The contents of your config file should look like this:

```json
{
  "extends": "@ramsey/stylelint-config"
}
```

Utilize the `--config` option when using the [stylelint cli](https://stylelint.io/user-guide/cli/).
