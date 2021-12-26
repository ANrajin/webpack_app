const path = require("path");

//js minify plugin
const TerserPlugin = require("terser-webpack-plugin");

//Css extract plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Remove the previous file after successful compilation
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  //file to compile
  entry: "./src/index.js",

  //output the compile file
  output: {
    filename: "bundle.[contenthash].js", //[contenthash] - will add md5 string with the file name
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },

  //application mode
  mode: "none",

  //
  module: {
    rules: [
      {
        //rules to compile any image file
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        //rules to compile css files
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], //first style-loader & then css-loader
      },
      {
        //rule to configure babel js
        test: "/.js$/",
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "app.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
