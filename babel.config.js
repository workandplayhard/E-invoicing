module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.jsx', '.js', '.json'],
        alias: {
          components: './src/components',
          hooks: './src/hooks',
          stacks: './src/stacks',
          screens: './src/screens',
          store: './src/store',
          helpers: './src/helpers',
          constants: './src/constants',
          assets: './src/assets',
          config: './src/config',
          api: './src/api',
          locales: './src/locales',
          context: './src/context',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
