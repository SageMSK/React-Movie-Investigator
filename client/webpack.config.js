var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
  if (process.env.NODE_ENV !== 'production') {
    return 'source-map';
  }

  return false;
}

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: __dirname,
    filename: './dist/scripts/[name].js'
  },
  devtool: getDevTool(),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }, // https://github.com/b82/webpack-basic-starter/blob/master/webpack.config.js
      { // For uploading pictures thru SASS/CSS
          test: /\.jpe?g$|\.gif$|\.png$/i,
          loader: "file-loader?name=/img/[name].[ext]"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('dist/styles/main.css', {
      allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};