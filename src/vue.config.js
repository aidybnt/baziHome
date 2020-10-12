module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            // 以设计稿350为例， 350 / 10 = 35
            // remUnit: 35
            // 以设计稿750为例， 750 / 10 = 75
            remUint: 75
          }),
        ]
      }
    },
    pluginOptions: {},
    modules: true,
    externals: {
      // 'element-ui': 'element-ui',
      // 'vue': 'Vue',
    }
  },
};