const path = require('path');

 let conf = {
  entry: {
    app: './src/index.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/',
  },

  devServer: {
    overlay: true,
  },

  module:{
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
}

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production ? 'source-map' : 'eval-sourcemap'; // этот вариант предоставляет исходники и в режиме production
  // conf.devtool = production ? false : 'eval-sourcemap'; // тут в продакшене исходные коды не видны
  
  return conf;
}