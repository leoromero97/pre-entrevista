module.exports = {
  'plugins': [
    [
      'module-resolver',
      {
        'root': ['./src'],
          'alias': {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@constants': './src/constants',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@scss': './src/styles/scss',
            '@public': './public'
          }
      }
    ]
  ]
}