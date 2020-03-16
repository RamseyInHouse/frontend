<!-- omit in toc -->
# Ramsey Boilerplate

Ramsey Boilerplate is the recommended example for how to use common front-end configs in Ramsey Solutions products.

- [EditorConfig](#editorconfig)
- [Prettier](#prettier)
  - [Installation](#installation)
  - [Required Dependencies:](#required-dependencies)
  - [Usage](#usage)
- [Stylelint](#stylelint)
  - [Installation](#installation-1)
  - [Required Dependencies:](#required-dependencies-1)
  - [Usage](#usage-1)
- [ESLint](#eslint)
  - [Installation](#installation-2)
  - [Required Dependencies](#required-dependencies-2)
  - [Usage](#usage-2)
- [Babel](#babel)
  - [Installation](#installation-3)
  - [Required Dependencies](#required-dependencies-3)
  - [Usage](#usage-3)
  - [What is included in the preset?](#what-is-included-in-the-preset)
- [Browserslist](#browserslist)
  - [Installation](#installation-4)
  - [Usage](#usage-4)

## [EditorConfig](https://editorconfig.org/)

The [`.editorconfig`](.editorconfig) file is a recommended starting point for the `.editorconfig` in your own project.

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

## [Babel](https://babeljs.io/)

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

## [Browserslist](https://github.com/browserslist/browserslist)

### Installation

```
yarn add dev @ramsey/browserslist-config
```

### Usage
[Configure](https://github.com/browserslist/browserslist#shareable-configs) Browserslist to extend the Ramsey Browserslist config by adding a `.browserslistrc` to the root of your project ([This is the Autoprefixer recommended way](https://github.com/postcss/autoprefixer#browsers)). PostCSS, Autoprefixer, Babel, & Webpack automatically look for the config file. The contents of your config file should look like this:

```yaml
extends @ramsey/browserslist-config
```
