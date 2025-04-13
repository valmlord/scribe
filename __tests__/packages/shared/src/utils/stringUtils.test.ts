import { capitalize, truncate, toSnakeCase } from '../../../../../packages/shared/src/utils/stringUtils';

describe('String utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('world')).toBe('World');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle already capitalized strings', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });
  });

  describe('truncate', () => {
    it('should truncate a string if it exceeds maxLength', () => {
      expect(truncate('Hello world', 5)).toBe('Hello...');
    });

    it('should not truncate a string if it does not exceed maxLength', () => {
      expect(truncate('Hello', 5)).toBe('Hello');
    });

    it('should use custom suffix when provided', () => {
      expect(truncate('Hello world', 5, '!')).toBe('Hello!');
    });

    it('should handle empty strings', () => {
      expect(truncate('', 5)).toBe('');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert camelCase to snake_case', () => {
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    it('should convert PascalCase to snake_case', () => {
      expect(toSnakeCase('HelloWorld')).toBe('hello_world');
    });

    it('should convert spaces to underscores', () => {
      expect(toSnakeCase('hello world')).toBe('hello_world');
    });

    it('should handle empty strings', () => {
      expect(toSnakeCase('')).toBe('');
    });
  });
});