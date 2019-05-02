module.exports={
    publicPath:'./',
    devServer:{
        port:8989,
        proxy: {
            '/api': {
                target: 'http://39.108.162.102:3000/api',//39.108.162.102
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}