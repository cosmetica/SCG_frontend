// vue.config.js
module.exports = {
    // options...
    devServer: {
        proxy: {
            '^/^': {
              target: 'http://localhost:3000/',
              ws: true,
              changeOrigin: true
            },
          }
    },
    
}