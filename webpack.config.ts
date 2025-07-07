import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

type WebpackConfig = Webpack.Configuration & WebpackDevServer.Configuration;

const webpackConfig: WebpackConfig = {
  entry: './src/Portfolio.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: ['ts-loader'], exclude: /node_modules/ },
      { test: /\.s?[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ],
  },
  devtool: 'inline-source-map',
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })],
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    hot: true,
    compress: true,
    port: 5000,
    // historyApiFallback: true // to render with React Router DOM
  },
};

module.exports = webpackConfig;
