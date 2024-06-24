import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tslint from 'typescript-eslint';

export default tslint.config(
  eslint.configs.recommended,
  ...tslint.configs.strict,
  ...tslint.configs.stylistic,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    rules: {
      'no-unused-expressions': 'error',
      'no-console': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
    },
  },
  { files: ['**/*.{c,m,}{t,j}s', '**/*.tsx'] },
  eslintConfigPrettier,
);
