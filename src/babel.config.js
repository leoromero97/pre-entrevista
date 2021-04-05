module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.js',
          '.jsx',
          '.json'
        ],
        alias: {
          '@assets': './src/app/assets',
          '@components': './src/app/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@screens': './src/app/screens',
          '@styles': './src/styles'
        }
      }
    ]
  ]
};
