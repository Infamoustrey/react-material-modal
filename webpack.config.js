module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  externals: {
    react: "commonjs react",
    react_dom: "commonjs react-dom",
    material_ui_core: "commonjs @material-ui/core"
  }
};
