const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container; 

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the output directory before each build
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
        },
      {
        test: /\.css$/i,
        exclude: /node_modules/, 
        use: [ MiniCssExtractPlugin.loader,  "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer:{
    port: 4000
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css', // Output CSS file name
      }),
      new ModuleFederationPlugin({
        name: 'products',
        filename: 'remoteEntry.js',
        exposes: {
          './Products': './src/index.js', 
        }
      }),
      new HtmlWebpackPlugin({
        title: "WebPack Class Demo",
        template: '/index.html', // Optional: Use your custom HTML template
        filename: 'index.html', // Output HTML file
        meta :{
            description : " Webpack demo class, Test for meta tag description."
        }
      }),
  ],
  mode: 'production'
};
