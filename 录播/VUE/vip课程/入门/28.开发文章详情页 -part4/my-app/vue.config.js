const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      "/api":{
        target:"http://test.my-app.com"
      },
      "/music":{
        target:"https://music.cyrilstudio.top/"
      }
    }
  },
  configureWebpack: {
    mode:"development",
    devtool: 'source-map',
  },
})