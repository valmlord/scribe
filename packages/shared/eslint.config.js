import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    extends: [
      tseslint.configs.recommended,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    files: ['src/**/*.ts'],
    rules: {
      // '@typescript-eslint/explicit-function-return-type': 'error',
      // 'no-console': 'warn'
    },
  }
);