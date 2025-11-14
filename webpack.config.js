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
      // Inline template with a safe fallback when public/index.html is missing (e.g., CI checkout issues)
      templateContent: () => {
        const tplPath = path.join(__dirname, 'public', 'index.html');
        if (fs.existsSync(tplPath)) {
          return fs.readFileSync(tplPath, 'utf8');
        }
        // Fallback minimal HTML (SPA mount point)
        return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Snapchat-Style Swipeable Filters Demo</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>html,body,#root{height:100%;margin:0;background:#000}</style>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>`;
      },
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