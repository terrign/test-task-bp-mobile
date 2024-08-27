const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: './',
    assetModuleFilename: 'assets/images/[name]_[contenthash][ext]',
    filename: 'app_[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            lossless: true,
            encodeOptions: {
              webp: { quality: 90 },
              jpg: { quality: 90 },
            },
          },
        },
        generator: [
          {
            preset: 'webp',
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              lossless: true,
              encodeOptions: {
                webp: { quality: 90 },
              },
            },
          },
          {
            preset: 'jpg',
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              lossless: true,
              encodeOptions: {
                jpg: { quality: 90 },
              },
            },
          },
        ],
      }),
      new CssMinimizerPlugin({
        minimizerOptions: { extractComments: false },
      }),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: true,
        },
      }),
    ],
  },
  devServer: {
    liveReload: true,
    open: true,
    host: 'localhost',
    client: {
      overlay: false,
    },
    hot: true,
    compress: true,
    port: 8080,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: path.resolve(__dirname, './src/assets/favicon.ico'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles_[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts)$/i,
        loader: 'babel-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        exclude: /module\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png)$/i,
        type: 'asset/resource',
      },
      {
        test: /module\.css$/i,
        use: [
          stylesHandler,
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camel-case-only',
                localIdentName: '[local]_[hash:base64:5]',
              },
              esModule: false,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
