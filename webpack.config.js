const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return {
    entry: [path.join(__dirname, "src/index")],
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        // {
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader"],
        // },
        {
          test: /\.html$/,
          use: "html-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/index.html"),
      }),
    ],
    devServer: {
      contentBase: "./public",
      port: 5000,
      host: "0.0.0.0",
      disableHostCheck: true,
      stats: "minimal",
      historyApiFallback: true,
      open: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  };
};
