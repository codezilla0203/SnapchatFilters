const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Avoid HtmlWebpackPlugin child compiler on CI by inlining the template
      templateContent: () => fs.readFileSync(path.resolve(__dirname, 'public/index.html'), 'utf8'),
      filename: 'index.html',
      minify: false,
      inject: 'body'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 8080,
    open: false, // disable auto-open to avoid hanging if browser blocks
    hot: true,
    host: '0.0.0.0', // bind to all interfaces
    allowedHosts: 'all',
    compress: true,
    client: {
      overlay: true,
      progress: true
    },
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  stats: {
    children: true,
    errorDetails: true
  }
};