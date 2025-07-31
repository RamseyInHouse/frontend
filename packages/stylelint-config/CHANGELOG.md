# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.0.0] - 2025-07-31

### 🚀 Major Changes - Stylelint v16+ Support

This version brings full compatibility with Stylelint v16+ and removes deprecated functionality.

### ✨ Added

- Support for Stylelint v16.23.0+
- Updated `stylelint-config-sass-guidelines` to v12.1.0
- Updated `stylelint-order` to v7.0.0

### 💥 Breaking Changes

- **REMOVED**: `stylelint-config-prettier` dependency and extension
  - No longer needed as Stylelint v15+ removed all conflicting stylistic rules
  - Prettier handles all code formatting now
- **REMOVED**: Deprecated stylistic rules:
  - `string-quotes` - Use Prettier for quote formatting
  - `function-parentheses-space-inside` - Use Prettier for spacing formatting
- **CHANGED**: Minimum required Stylelint version is now v16.23.0
- **CHANGED**: Prettier is now effectively required (was previously optional)

### 🔧 Migration Guide

1. **Update your dependencies**:

   ```bash
   npm install stylelint@latest prettier@latest
   ```

2. **Remove any manual `stylelint-config-prettier` references** from your config if you extended it separately

3. **Ensure Prettier is configured** in your project as it now handles all stylistic formatting

4. **Review your stylelint config** - remove any deprecated stylistic rules if you added them manually

### 📝 Notes

- All existing class naming patterns and conventions remain unchanged
- Non-stylistic linting rules continue to work as before
- The package now focuses purely on semantic and structural CSS linting
- Formatting consistency is delegated to Prettier (as recommended by the Stylelint team)

## [3.0.0] - Previous Version

Previous version supporting Stylelint v15 and earlier.
