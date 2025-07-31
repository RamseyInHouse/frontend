const js = require('@eslint/js');
const babelParser = require('@babel/eslint-parser');
const prettier = require('eslint-config-prettier');
const { rules } = require('./rules');

module.exports = [
  // Use ESLint's recommended rules as base
  js.configs.recommended,
  
  // Override with our custom configuration
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
          ],
        },
      },
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        
        // Node.js globals
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        global: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
      },
    },
    rules: rules,
  },
  
  // Disable Prettier conflicts (must be last)
  prettier,
];
