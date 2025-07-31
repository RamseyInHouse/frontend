const eslintConfig = require('../index.js');
const rules = require('../rules.js');

describe('@ramseyinhouse/eslint-config', () => {
  describe('Configuration structure', () => {
    test('should export a valid ESLint configuration object', () => {
      expect(eslintConfig).toBeDefined();
      expect(typeof eslintConfig).toBe('object');
    });

    test('should extend the correct configurations', () => {
      expect(eslintConfig.extends).toContain('prettier');
      expect(eslintConfig.extends.some(ext => ext.includes('rules'))).toBe(true);
    });

    test('should have correct parser configuration', () => {
      expect(eslintConfig.parser).toBe('@babel/eslint-parser');
      expect(eslintConfig.parserOptions).toBeDefined();
      expect(eslintConfig.parserOptions.sourceType).toBe('module');
    });

    test('should have correct environment settings', () => {
      expect(eslintConfig.env).toBeDefined();
      expect(eslintConfig.env.browser).toBe(true);
      expect(eslintConfig.env.jest).toBe(true);
    });
  });

  describe('Rules configuration', () => {
    test('should export rules object', () => {
      expect(rules).toBeDefined();
      expect(rules.rules).toBeDefined();
      expect(typeof rules.rules).toBe('object');
    });

    test('should not contain deprecated rules', () => {
      const deprecatedRules = [
        'valid-jsdoc',
        'require-jsdoc',
        'no-negated-in-lhs'
      ];
      
      deprecatedRules.forEach(rule => {
        expect(rules.rules[rule]).toBeUndefined();
      });
    });

    test('should contain core error-prevention rules', () => {
      const coreRules = [
        'no-console',
        'no-debugger',
        'no-dupe-keys',
        'no-duplicate-case',
        'no-empty',
        'use-isnan',
        'valid-typeof'
      ];

      coreRules.forEach(rule => {
        expect(rules.rules[rule]).toBeDefined();
      });
    });

    test('should contain best practice rules', () => {
      const bestPracticeRules = [
        'eqeqeq',
        'no-eval',
        'no-caller',
        'curly',
        'default-case'
      ];

      bestPracticeRules.forEach(rule => {
        expect(rules.rules[rule]).toBeDefined();
      });
    });

    test('should contain ES6+ rules', () => {
      const es6Rules = [
        'arrow-body-style',
        'arrow-parens',
        'arrow-spacing',
        'constructor-super',
        'no-const-assign',
        'prefer-template'
      ];

      es6Rules.forEach(rule => {
        expect(rules.rules[rule]).toBeDefined();
      });
    });

    test('should have appropriate rule severity levels', () => {
      // Check that critical rules are set to error (string format)
      expect(rules.rules['no-debugger']).toBe('error');
      expect(rules.rules['no-dupe-keys']).toBe('error');
      expect(rules.rules['no-eval']).toBe('error');
      
      // Check that console is set to warn (string format)
      expect(rules.rules['no-console']).toBe('warn');
    });
  });

  describe('Prettier integration', () => {
    test('should extend prettier config to avoid conflicts', () => {
      expect(eslintConfig.extends).toContain('prettier');
    });
  });
});
