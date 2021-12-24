const path = require("path");

module.exports = {
  //file to compile
  entry: "./src/index.js",

  //output the compile file
  output: {
    filename: "bundle.js",
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
        use: ["style-loader", "css-loader"], //first style-loader & then css-loader
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
};
