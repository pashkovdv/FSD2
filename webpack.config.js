const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
          
        ],
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              },
            },
          },
        ],
      },
      
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
  ],

}

module.exports = (env, options) => {
  let production = options.mode === 'production';

  conf.devtool = production ? 'source-map' : 'eval-sourcemap'; // этот вариант предоставляет исходники и в режиме production
  // conf.devtool = production ? false : 'eval-sourcemap'; // тут в продакшене исходные коды не видны
  
  return conf;
}