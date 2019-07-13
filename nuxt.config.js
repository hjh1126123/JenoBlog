module.exports = {
  mode: 'universal',

  /**
   * 头部
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_1198136_snkhen7e2q.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/reset.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/animation.css'
      }
    ]
  },

  /**
   * loading定制
   */
  loading: {
    color: '#fff'
  },

  /**
   * 全局CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /**
   * 插件
   */
  plugins: [
    '@/plugins/ui-load',
    '@/plugins/sm-filter',
    '@/plugins/sm-fixed',
    '@/plugins/sm-axios',
    '@/plugins/my-train',
    '@/plugins/sm-extend'
  ],

  /**
   * 模块
   */
  modules: [
    '@nuxtjs/axios',
  ],

  /**
   * 配置路由
   */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return {
        y: 0
      }
    }
  },

  /**
   * axios配置
   */
  axios: {
    proxy: true
  },

  /**
   * 请求代理
   */
  proxy: [
    ['/server', {
      target: 'http://119.29.195.35:1126',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/server': ''
      }
    }]
  ],

  /**
   * nuxt构建配置
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, {
      isClient
    }) {
      if (isClient) {
        config.module.rules.push({
          test: /\.html$/,
          loader: 'html-loader'
        })
      }
    }
  }
}
