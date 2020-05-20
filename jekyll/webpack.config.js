const path = require("path");
const SentryPlugin = require("@sentry/webpack-plugin");

module.exports = (env) => {
  const isDryRun = env && env.dry_run;

  return {
    devtool: "source-map",
    entry: "./src/_scripts/main.js",
    mode: "production",
    output: {
      filename: "rvtr_app.bundle.js",
      path: path.resolve(__dirname, "src/assets/js/"),
    },
    plugins: [
      new SentryPlugin({
        dryRun: isDryRun,
        include: "./src/assets/js/",
        release: `rvtr-app@${process.env.npm_package_version}`,
        setCommits: {
          auto: true,
          repo: "rvtr-app",
        },
      }),
    ],
  };
};
