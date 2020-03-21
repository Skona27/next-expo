// @ts-nocheck
const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  const babelLoaderRules = {
    test: /\.tsx?$/,
    loader: "babel-loader",
    options: {
      presets: ["babel-preset-expo"]
    }
  };

  config.module.rules = [...config.module.rules, babelLoaderRules];

  // Customize the config before returning it.
  return config;
};
