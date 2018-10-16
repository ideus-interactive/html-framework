
const glob = require("glob");
const $ = jQuery = require('jquery');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const basePath = __dirname;
const targetPath = '../';
const targetFolder = 'assets';
const SpritesmithPlugin = require('webpack-spritesmith');
module.exports = {
  entry: {
    'js/scripts': glob.sync('./src/js/*.js')
  },
  output: {
    path: path.resolve(__dirname, '../assets/'),
    filename: '[name].js'
  },
  node: false,
  module: {
        rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'}
        },
          {
            test: /\.scss$/,
            use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader?url=false', 'sass-loader']
        },
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader?url=false']
          },
        {test: /\.png$/, use: [
                'file-loader?name=[path][name].[ext]'
            ]}
        ]
    },
  resolve: {
        modules: ["node_modules", "src"]
    },
  plugins: [

  new CleanWebpackPlugin([targetFolder], {
        root: basePath + '/' + targetPath
      }),
    new webpack.ProvidePlugin({
      "window.jQuery": "jquery",
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin([{
      from: 'src/',
      to: '../assets/',
      ignore: ["js/**/*", "sass/**/*"]
    },
      {
        from: 'src/fonts/',
        to: '../assets/fonts/'
      }]),

    new SpritesmithPlugin({
      src :{
       cwd: path.resolve(__dirname, 'src/img/sprites'),
                glob: '*.png'
    },
                 target: {
                image: path.resolve(__dirname, 'src/img/blocks/spritessheet.png'),
                css: path.resolve(__dirname, 'src/sass/_sprite.scss')
            },
            apiOptions: {
               cssImageRef: '../img/blocks/spritessheet.png'
            }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.min.css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true
    })
    
   ]
};
