const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/app/Index.js", // aqui se llamarn todos los js creados
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js" //nombre que le quieras colocar
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
