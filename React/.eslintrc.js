module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint', 'import-helpers'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'none',
        endOfLine: 'auto',
        tabWidth: 2,
        printWidth: 80
      }
    ],
    /* vvvvv ADD NEW HERE vvvvv */
    'react/jsx-no-useless-fragment': 'warn',
    'func-names': 'warn',
    'no-param-reassign': 'warn',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'no-restricted-syntax': 'warn',
    'object-shorthand': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-curly-newline': 'off',
    'default-param-last': 'off',
    'no-use-before-define': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'react/button-has-type': 'off',
    /* ^^^^^ ADD NEW HERE ^^^^^ */
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image']
      }
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: ['/^react/', 'module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts']
    }
  }
}
