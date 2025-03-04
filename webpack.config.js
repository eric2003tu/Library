const path = require('path');

module.exports = {
  // Entry point of your application
  entry: './src/index.js', // Adjust this path to your actual entry file

  // Output configuration
  output: {
    filename: 'bundle.js', // Output filename for the bundled file
    path: path.resolve(__dirname, 'dist') // Output directory for the bundled files
  },

  // Resolve configuration to fix the polyfill issues
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve
    fallback: {
      "crypto": require.resolve("crypto-browserify"), // Polyfill for crypto module
      "buffer": require.resolve("buffer/"), // Polyfill for buffer module
      "util": require.resolve("util/"), // Polyfill for util module
      "stream": require.resolve("stream-browserify") // Polyfill for stream module
    }
  },

  // Module rules (loaders)
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Transpile JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Babel presets for React and ES6+
          }
        }
      },
      // You can add other loaders for styles, images, etc., as needed
    ]
  },

  // Plugins (optional, depending on your setup)
  plugins: [
    // You can add plugins here like HtmlWebpackPlugin, etc.
  ],

  // Development server setup (optional for local development)
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
