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
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "~@/assets/__variables.scss";
        @import "~@/assets/__utils.scss";
        `,
      },
    },
  },
};
