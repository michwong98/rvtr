const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./src/_scripts/main.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "src/assets/js"),
    filename: "rvtr.bundle.js",
  },
};
