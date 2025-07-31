# `@ramseyinhouse/eslint-config`

The official [ESLint](https://eslint.org/) configuration for [Ramsey Solutions](https://ramseyinhouse.com/).

Support for [Babel](https://www.npmjs.com/package/@babel/eslint-parser) and [Prettier](https://www.npmjs.com/package/eslint-config-prettier) is pre-configured out of the box.

## Version 2.0.0 Changes

This major version update includes:

- **ESLint v9+ Support**: Now supports ESLint v9 with the new flat config system
- **Node.js 18.18+**: Updated minimum Node.js version requirement
- **Updated dependencies**: ESLint 9.32+, latest Babel packages, Prettier integration
- **Modernized rules**: Removed deprecated rules and updated to current ESLint best practices
- **Dual config support**: Both flat config (ESLint v9+) and legacy config (ESLint v8) formats
- **Comprehensive test suite**: 20+ tests ensuring configuration reliability

## Requirements

- [`Node.js`](https://nodejs.org/) >= 18.18.0
- [`eslint`](https://www.npmjs.com/package/eslint) >= 9.32.0
- [`@babel/core`](https://www.npmjs.com/package/@babel/core) >= 7.28.0
- [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) >= 7.28.0
- [`prettier`](https://www.npmjs.com/package/prettier) >= 3.0.0 - Though not strictly required, this config relies on `prettier` to enforce many stylistic rules.

## Installation

Install the required dependencies as `devDependencies`:

```bash
npm install --save-dev eslint@^9.32.0 @babel/core@^7.28.0 @babel/eslint-parser@^7.28.0 @ramseyinhouse/eslint-config
```

## Usage

### ESLint v9+ (Flat Config - Recommended)

This package now defaults to the new ESLint flat configuration format required by ESLint v9+.

Create an `eslint.config.js` file in the root of your project:

```js
const ramseyConfig = require('@ramseyinhouse/eslint-config');

module.exports = [
  ...ramseyConfig,
  // Your custom configuration
  {
    files: ['**/*.js'],
    rules: {
      // Override or add rules here
    }
  }
];
```

### ESLint v8 and below (Legacy Config)

For projects still using ESLint v8 or below with the legacy configuration format:

Create a `.eslintrc.js` file in the root of your project:

```js
module.exports = {
  extends: ['@ramseyinhouse/eslint-config/legacy'],
  // Your custom rules
  rules: {
    // Override or add rules here
  }
};
```

Or use `package.json`:

```json
{
  "eslintConfig": {
    "extends": ["@ramseyinhouse/eslint-config/legacy"]
  }
}
```

## Migration from v1.x to v2.x

### Breaking Changes

1. **Node.js version requirement**: Now requires Node.js 18.18.0 or higher
2. **ESLint version requirement**: Now requires ESLint 9.32.0 or higher  
3. **Default configuration format**: Now uses flat config by default
4. **Babel configuration**: Updated to use latest Babel parser and presets

### Migration Steps

1. Update your dependencies:
   ```bash
   npm install --save-dev eslint@^9.32.0 @babel/core@^7.28.0 @babel/eslint-parser@^7.28.0
   ```

2. **For ESLint v9+ projects** (recommended):
   - Rename `.eslintrc.*` to `eslint.config.js`
   - Update configuration format as shown in usage examples above

3. **For ESLint v8 projects**:
   - Update your extends to use `/legacy`: `@ramseyinhouse/eslint-config/legacy`
   - Consider migrating to ESLint v9+ for better performance and features

## What's Included

This configuration includes:

- **Base Rules**: ESLint recommended rules
- **Code Quality**: Rules for code complexity, consistency, and best practices  
- **ES6+ Support**: Modern JavaScript features including arrow functions, destructuring, etc.
- **Babel Integration**: Support for modern JavaScript syntax via @babel/eslint-parser
- **Prettier Integration**: Automatic conflict resolution with Prettier formatting

### Rule Categories

- **Possible Problems**: Catch logical errors and suspicious patterns
- **Code Quality**: Enforce best practices and maintainable code
- **Stylistic**: Consistent code formatting (when not using Prettier)
- **ES6+ Features**: Modern JavaScript syntax and features

## Testing

This package includes a comprehensive test suite to ensure configuration reliability:

```bash
npm test
```

## Contributing

Please follow the existing code style and add tests for any new features or changes.

## License

MIT
