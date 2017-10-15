/**
 * Created by 123 on 2016/8/10.
 */
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

module.exports = {
    server: {
        baseDir: "./",
        index: "modules/app.html"
    },
    notify: false,
    browser: 'google chrome',
    middleware: [
        morgan('dev'),
        proxy('/api', {
            target: "http://192.168.0.100:8080",
            changeOrigin: true,
            logLevel: 'debug'
        })
    ]
};