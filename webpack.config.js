const path = require('path');

module.exports = {
  entry: './client/index',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
    ],
  },
};
