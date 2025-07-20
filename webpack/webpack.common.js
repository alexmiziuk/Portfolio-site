const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    home: './src/pages/home/home.js',
    cv: './src/pages/cv/cv.js',
    portfolio: './src/pages/portfolio/portfolio.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      // Добавьте правило для обработки SVG
      {
        test: /\.(png|jpe?g|gif|webp|ico|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: 'index.html', chunks: ['home'], template: './src/pages/home/index.html' }),
    new HtmlWebpackPlugin({ filename: 'cv/index.html', chunks: ['cv'], template: './src/pages/cv/index.html' }),
    new HtmlWebpackPlugin({ filename: 'portfolio/index.html', chunks: ['portfolio'], template: './src/pages/portfolio/index.html' }),
  ],
  resolve: {
    extensions: ['.js', '.scss'],
  },
};