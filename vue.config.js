module.exports = {
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    port: 1888,
    open: true,
    proxy: {
      '^/api': {
        // 本地服务接口地址
        target: 'http://192.168.24.9:8000/',
        ws: true,
        // secure:false,  // 安全证书校验 - 代理https必须要加
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          // '^/api': '/'
          '^/api': '/'
        }
      }
    }
  },
}