const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/styles.scss";`
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map' // or 'eval-source-map' for quicker builds
  }
})
