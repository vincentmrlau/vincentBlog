
var webpack = require('webpack');
var config = {
    entry:{
        index:'./client/static/js/view/index.js',
        vendor:['react','react-dom']
    } ,

    //入口文件配置
    output:{
        path :  './client/static/output/js/',
        filename:'[name].bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777
    },

    module: {
        loaders: [ {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin('vendor','vendor.bundle.js')
    ]

}

module.exports = config;