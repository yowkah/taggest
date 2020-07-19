module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader',
        },
      ],
    },
  },
};
