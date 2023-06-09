module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-useless-catch': 'off',
    eqeqeq: 'off',
    'prefer-regex-literals': 'off',
    'default-case': 'off',
    'comma-dangle': ['error', 'never'],
    'prefer-const': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'arrow-parens': [2, 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    curly: [2, 'all'],
    indent: ['error', 2, {
      SwitchCase: 1,
      outerIIFEBody: 'off'
    }],
    'comma-spacing': ['error', {
      before: false, after: true
    }],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: false
    }],
    'no-unused-vars': ['error',
      {
        argsIgnorePattern: 'next|_.+',
        varsIgnorePattern: '_'
      }
    ],
    "space-infix-ops": ["error", { "int32Hint": false }]
  }
}
