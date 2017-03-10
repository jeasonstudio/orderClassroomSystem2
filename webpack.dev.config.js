const webpack = require('webpack');
const config = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

config.devtool = '#source-map'; // source-map
config.output.publicPath = '/dist/'; // 资源路径
config.output.filename = '[name].js'; // 入口js命名
config.output.chunkFilename = '[name].chunk.js'; // 路由js命名

config.vue = {
    loaders: {
        css: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader?sourceMap", {
                publicPath: "/dist/"
            }
        ),
        sass: ExtractTextPlugin.extract(
            'vue-style-loader',
            'css-loader!sass-loader'
        )
    }
};

config.devServer = {
    proxy: {
        '/api.php/**': {
            target: 'http://test-ocs.kalen.site',
            changeOrigin: true,
            secure: false,
            hostRewrite: true,
            autoRewrite: true,
            cookieDomainRewrite: {
                "http://localhost:8080/": "http://test-ocs.kalen.site/"
            }
        }
    },
    host: '0.0.0.0',
    port: 8080
}

config.onProxyRes = function (proxyRes, req, res) {
    let existingCookies = proxyRes.headers['set-cookie'],
        rewrittenCookies = [];

    if (existingCookies !== undefined) {
        if (!Array.isArray(existingCookies)) {
            existingCookies = [existingCookies];
        }

        for (let i = 0; i < existingCookies.length; i++) {
            rewrittenCookies.push(existingCookies[i].replace(/;\s*?(Secure)/i, ''));
        }

        proxyRes.headers['set-cookie'] = rewrittenCookies;
    }
}

config.plugins = (config.plugins || []).concat([
    new ExtractTextPlugin("[name].css", {
        allChunks: true,
        resolve: ['modules']
    }), // 提取CSS
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'), // 提取第三方库
    new HtmlWebpackPlugin({ // 构建html文件
        filename: '../index.html',
        template: './src/template/index.ejs',
        inject: false
    })
]);

// 写入环境变量
fs.open('./src/config/env.js', 'w', function (err, fd) {
    var buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer) {});
});

module.exports = config;