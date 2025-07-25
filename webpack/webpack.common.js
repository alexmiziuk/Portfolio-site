const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      {
        test: /\.(png|jpe?g|gif|webp|ico|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['home'],
      template: './src/pages/home/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'cv/index.html',
      chunks: ['cv'],
      template: './src/pages/cv/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'portfolio/index.html',
      chunks: ['portfolio'],
      template: './src/pages/portfolio/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        // Копируем только необходимые файлы slick-carousel
        {
          from: path.resolve(__dirname, '../node_modules/slick-carousel/slick/ajax-loader.gif'),
          to: path.resolve(__dirname, '../dist/assets/ajax-loader.gif')
        },
        {
          from: path.resolve(__dirname, '../node_modules/slick-carousel/slick/fonts/'),
          to: path.resolve(__dirname, '../dist/fonts/')
        },
        {
          from: path.resolve(__dirname, '../node_modules/slick-carousel/slick/slick.css'),
          to: path.resolve(__dirname, '../dist/css/slick.css')
        },
        {
          from: path.resolve(__dirname, '../node_modules/slick-carousel/slick/slick-theme.css'),
          to: path.resolve(__dirname, '../dist/css/slick-theme.css')
        }
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    alias: {
      'jquery': path.resolve(__dirname, '../node_modules/jquery/dist/jquery.js')
    }
  },
};