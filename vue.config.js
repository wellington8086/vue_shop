



module.exports = {

  chainWebpack: config => {
  // 配置发布环境的入口文件
   config.when(process.env.NODE_ENV === 'production', config => {
    config.entry('app').clear().add('./src/main-prod.js')



     //配置 externals 加载外部 CDN 资源
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        echarts: 'echarts',
        nprogress: 'NProgress',
        'vue-quill-editor': 'VueQuillEditor'
      })

      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })

   })



    //配置开发环境的入口文件
   config.when(process.env.NODE_ENV === 'development', config => {
    config.entry('app').clear().add('./src/main-dev.js')
      



      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
   })


  },


  
  lintOnSave: false,
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      }
    }
  }