const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

  mode: 'development',
  devtool: 'source-map',

  entry: {
    // global: './src/styles/global.css',
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'babel-loader'}
    ]
  },


  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        hash: true
    }),

    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[name].css'
    // }),

    // Ignore all locale files of moment.js
    // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|ru/),

    // new CopyWebpackPlugin(
    //     [
    //       {from: './src/media/assets', to: 'assets'},
    //       // {from: './src/scripts/config/service_urls.js'}
    //     ], {
    //       ignore: [],
    //       copyUnmodified: true
    //     }
    // ),
    // new webpack.DefinePlugin({
    //   'process.env.APP_NAME': JSON.stringify(process.env.APP_NAME)
    // }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9999
  }
};
