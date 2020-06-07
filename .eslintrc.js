module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: 'airbnb',
  plugins: [
    'import',
    'jsx-a11y',
    'react',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': 'error', // airbnb is using warn
    'no-alert': 'error', // airbnb is using warn
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // airbnb is using .jsx
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off', // temporary enabled
    'jsx-a11y/label-has-for': [2, {
      'required': {
        'every': ['id']
      }
    }], // for nested label htmlFor error
    'react/jsx-props-no-spreading': 'off', // temporary enabled
    'react/jsx-closing-bracket-location': 'off',
  }
}
