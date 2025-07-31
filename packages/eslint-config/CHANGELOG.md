# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-12-19

### Added
- ESLint v9+ flat config support as the default configuration format
- Comprehensive test suite with 20+ tests for configuration validation
- Export paths for both flat and legacy configurations
- Support for modern browser and Node.js globals including `fetch`
- Dual configuration format support

### Changed
- **BREAKING**: Minimum Node.js version requirement increased to 18.18.0
- **BREAKING**: Minimum ESLint version requirement increased to 9.32.0
- **BREAKING**: Default configuration now uses flat config format
- Updated @babel/core to v7.28.0
- Updated @babel/eslint-parser to v7.28.0
- Updated eslint-config-prettier to v10.1.8
- Main entry point now uses flat-config.js instead of index.js
- Improved package.json with proper exports and files configuration

### Fixed
- Compatibility issues with ESLint v9+ flat configuration system
- Deprecated rule configurations updated for modern ESLint
- Better integration with modern Babel parser configuration

### Migration Guide
- For ESLint v9+ users: Use `require('@ramseyinhouse/eslint-config')` in `eslint.config.js`
- For ESLint v8 users: Use `@ramseyinhouse/eslint-config/legacy` in `.eslintrc.js`
- Update Node.js to v18.18+ and ESLint to v9.32+ for best experience

## [1.x.x] - Previous Versions
- Legacy ESLint configurations for older ESLint versions
- Traditional eslintrc format support only
