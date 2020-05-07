const path = require("path");
const SentryPlugin = require("@sentry/webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/_scripts/main.js",
  mode: "production",
  output: {
    filename: "rvtr_app.bundle.js",
    path: path.resolve(__dirname, "src/assets/js/"),
  },
  plugins: [
    new SentryPlugin({
      include: "./src/assets/js/",
      release: `rvtr-app@${process.env.npm_package_version}`,
      setCommits: {
        auto: true,
        repo: "rvtr-app",
      },
    }),
  ],
};
