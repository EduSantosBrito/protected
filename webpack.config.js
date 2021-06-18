const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "brito",
    projectName: "protected",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: [...defaultConfig.externals, "react-router-dom"],
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public",
          },
        ],
      }),
    ],
  });
};
