module.exports = {
    baseUrl:'./',
    devServer: {
        disableHostCheck: true, //  新增该配置项
        proxy: {
            '/OA': {  // 名字不能随便起，一定要写项目的名字
                target: 'http://47.104.77.99:8080/OA/',   //代理接口
                // target: 'http://192.168.1.26:8080/',   //代理接口
                changeOrigin: true,
                pathRewrite: {
                    '^/OA': ''    //代理的路径
                }
            }
        }

    }
};
