module.exports = { 
  extends: ['wolox-react'],
  settings: {
    'react': {
      'version': 'detect'
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'camelcase': 'off',
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off'
  }
 };
 