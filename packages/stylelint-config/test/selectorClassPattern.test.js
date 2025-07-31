const {
  selectorClassPatternRules,
  getFormattedSelectorClassPatternRules,
} = require('../lib/selectorClassPattern');

describe('selectorClassPattern', () => {
  describe('rules', () => {
    describe('components', () => {
      const regex = new RegExp(selectorClassPatternRules.components);

      test('should have a name using pascal case', () => {
        expect(regex.test('Button')).toBe(true);
        expect(regex.test('ComponentName')).toBe(true);
      });

      test('should have a name and a descendent', () => {
        expect(regex.test('Button-icon')).toBe(true);
      });

      test('should have a name and a vendor', () => {
        expect(regex.test('gzl-Button')).toBe(true);
      });

      test('should have a name and a modifier', () => {
        expect(regex.test('Button--comfortable')).toBe(true);
      });

      test('should have a name, descendent, vendor and modifier', () => {
        expect(regex.test('gzl-Button-icon--comfortable')).toBe(true);
      });

      test('should not have a names that are not in pascal case', () => {
        expect(regex.test('button')).toBe(false);
        expect(regex.test('gzl-button')).toBe(false);
        expect(regex.test('button--comfortable')).toBe(false);
        expect(regex.test('componentName')).toBe(false);
      });
    });

    describe('utilities', () => {
      const regex = new RegExp(selectorClassPatternRules.utilities);

      test('should be prefixed by `u-`', () => {
        expect(regex.test('u-hidden')).toBe(true);
      });

      test('should have a name in camel case', () => {
        expect(regex.test('u-sizeFill')).toBe(true);
      });

      test('should allow responsive utilities', () => {
        expect(regex.test('u-palmOnly-hidden')).toBe(true);
        expect(regex.test('u-lapOnly-hidden')).toBe(true);
        expect(regex.test('u-lapToLapWide-hidden')).toBe(true);
        expect(regex.test('u-lapToDesk-hidden')).toBe(true);
        expect(regex.test('u-lapAndUp-hidden')).toBe(true);
        expect(regex.test('u-lapWideOnly-hidden')).toBe(true);
        expect(regex.test('u-lapWideToDesk-hidden')).toBe(true);
        expect(regex.test('u-lapWideAndUp-hidden')).toBe(true);
        expect(regex.test('u-deskOnly-hidden')).toBe(true);
        expect(regex.test('u-deskAndUp-hidden')).toBe(true);
        expect(regex.test('u-wallOnly-hidden')).toBe(true);
      });

      test('should not allow non-camel case', () => {
        expect(regex.test('u-SizeFill')).toBe(false);
        expect(regex.test('u-size-Fill')).toBe(false);
        expect(regex.test('u-deskOnly-Fill')).toBe(false);
        expect(regex.test('u-deskOnly-size-Fill')).toBe(false);
      });
    });

    describe('states', () => {
      const regex = new RegExp(selectorClassPatternRules.states);

      test('should use an accepted prefix', () => {
        expect(regex.test('is-active')).toBe(true);
        expect(regex.test('has-modal')).toBe(true);
        expect(regex.test('in-darkMode')).toBe(true);
      });

      test('should have a name in camel case', () => {
        expect(regex.test('is-openBox')).toBe(true);
      });

      test('should not have a name in Pascal Case', () => {
        expect(regex.test('is-OpenBox')).toBe(false);
      });
    });
  });

  describe('getFormattedSelectorClassPatternRules', () => {
    const regex = new RegExp(getFormattedSelectorClassPatternRules());

    test('should pass previous valid rules', () => {
      expect(regex.test('Button')).toBe(true);
      expect(regex.test('ComponentName')).toBe(true);
      expect(regex.test('Button-icon')).toBe(true);
      expect(regex.test('gzl-Button')).toBe(true);
      expect(regex.test('Button--comfortable')).toBe(true);
      expect(regex.test('gzl-Button-icon--comfortable')).toBe(true);
      expect(regex.test('u-sizeFill')).toBe(true);
      expect(regex.test('u-palmOnly-sizeFill')).toBe(true);
      expect(regex.test('is-active')).toBe(true);
      expect(regex.test('has-modal')).toBe(true);
      expect(regex.test('in-darkMode')).toBe(true);
      expect(regex.test('is-openBox')).toBe(true);
      expect(regex.test('on-darkCanvas')).toBe(true);
    });

    test('should fail previous invalid cases', () => {
      expect(regex.test('button')).toBe(false);
      expect(regex.test('gzl-button')).toBe(false);
      expect(regex.test('button--comfortable')).toBe(false);
      expect(regex.test('componentName')).toBe(false);
      expect(regex.test('u-size-Fill')).toBe(false);
    });
  });
});
