const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/welcome.html",
      filename: "./welcome.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/error.html",
      filename: "./error.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/crearEjercicios2.html",
      filename: "./crearEjercicios2.html"
    }),
    new HtmlWebPackPlugin({
      template: "./src/viewEjercicio.html",
      filename: "./viewEjercicio.html"
    })
  ]
};