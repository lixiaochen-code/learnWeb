const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target:"http://test.my-app.com"
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map',
  },
})