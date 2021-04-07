module.exports = { 
  extends: ['wolox-react'],
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'babel-module': {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@components': './src/app/components',
          '@screens': './src/app/screens',
          '@constants': './src/constants',
          '@utils': './src/utils',
          '@config': './src/config',
          '@hooks': './src/hooks',
          '@scss': './src/scss',
          '@public': './public'
        }
      }
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
 