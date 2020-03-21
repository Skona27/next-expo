// @ts-nocheck

module.exports = api => {
  api.cache(true);
  api.debug = true;
  api.showConfig = true;
  return {
    presets: [
      "@babel/preset-react",
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current"
          }
        }
      ]
    ],
    plugins: [["babel-plugin-react-native-web", { commonjs: true }]]
  };
};
