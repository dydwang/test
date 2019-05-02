module.exports={
    publicPath:'./',
    devServer:{
        port:8989,
        proxy: {
            '/api': {
                target: 'http://172.17.33.179:3000/api',//39.108.162.102
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }

}