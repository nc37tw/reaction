const webpack = require("webpack")
const path = require("path")

module.exports = () => {
  return {
    entry: {
      "login": [
        "./src/apps/loyalty/containers/login/browser",
      ],
      "inquiries": [
        "./src/apps/loyalty/containers/inquiries/browser",
      ]
    },
    module: {
      rules: [
        { test: /\.json$/, loader: "json-loader" },
        {
          exclude: [/node_modules/, /__stories__/],
          use: [
            "awesome-typescript-loader",
          ],
          test: /\.tsx?$/,
        },
      ],
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname, "../dist/bundles"),
      publicPath: "/bundles",
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin("commons.chunk"),
    ],
    resolve: {
      extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
    },
  }
}
