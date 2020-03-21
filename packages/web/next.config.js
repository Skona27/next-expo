// @ts-nocheck
const withTranspileModules = require("next-transpile-modules")([
  "components",
  "react-native"
]);

module.exports = withTranspileModules({
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web"
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions
    ];
    return config;
  }
});
