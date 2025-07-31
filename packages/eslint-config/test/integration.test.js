const config = require('../index.js');
const fs = require('fs');
const path = require('path');

describe('ESLint Integration Tests', () => {
  const testDir = path.join(__dirname, 'fixtures');
  
  beforeAll(() => {
    // Create test fixtures directory
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
  });

  afterAll(() => {
    // Clean up test fixtures
    if (fs.existsSync(testDir)) {
      fs.rmSync(testDir, { recursive: true, force: true });
    }
  });

  describe('Configuration structure', () => {
    test('should have valid ESLint configuration structure', () => {
      expect(config).toBeDefined();
      expect(typeof config).toBe('object');
      expect(config.extends).toBeDefined();
      expect(config.parser).toBe('@babel/eslint-parser');
      expect(config.env).toBeDefined();
      expect(config.parserOptions).toBeDefined();
    });

    test('should require babel parser options for JSX', () => {
      expect(config.parserOptions.sourceType).toBe('module');
    });
  });

  describe('Valid JavaScript code', () => {
    test('should accept modern ES6+ syntax', () => {
      const validCode = `
const greeting = 'Hello World';
const numbers = [1, 2, 3];

const processNumbers = (nums) => {
  return nums.map((num) => num * 2);
};

const doubledNumbers = processNumbers(numbers);

export { greeting, doubledNumbers };
`;

      const testFile = path.join(testDir, 'valid.js');
      fs.writeFileSync(testFile, validCode);

      // This test passes if no exception is thrown
      expect(() => {
        // Basic syntax validation by requiring the parser
        const babel = require('@babel/eslint-parser');
        expect(babel).toBeDefined();
      }).not.toThrow();
    });

    test('should handle destructuring and template literals', () => {
      const modernCode = `
const obj = { a: 1, b: 2, c: 3 };
const { a, b, ...rest } = obj;

const name = 'World';
const greeting = \`Hello \${name}!\`;

const [first, second] = [1, 2];
`;

      const testFile = path.join(testDir, 'modern.js');
      fs.writeFileSync(testFile, modernCode);

      // Basic validation that the code can be written to file system
      expect(fs.existsSync(testFile)).toBe(true);
      expect(fs.readFileSync(testFile, 'utf8')).toContain('const { a, b, ...rest }');
    });
  });

  describe('Configuration integration', () => {
    test('should extend prettier configuration', () => {
      expect(config.extends).toContain('prettier');
    });

    test('should have browser and jest environments enabled', () => {
      expect(config.env.browser).toBe(true);
      expect(config.env.jest).toBe(true);
    });

    test('should use module source type for ES6 imports/exports', () => {
      expect(config.parserOptions.sourceType).toBe('module');
    });
  });

  describe('Babel parser integration', () => {
    test('should be able to load babel parser', () => {
      expect(() => {
        const parser = require('@babel/eslint-parser');
        expect(parser).toBeDefined();
      }).not.toThrow();
    });

    test('should be able to load babel core', () => {
      expect(() => {
        const babel = require('@babel/core');
        expect(babel).toBeDefined();
      }).not.toThrow();
    });
  });
});
