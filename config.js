const log4js = require('log4js');

log4js.configure({
    appenders: {
        common: {
            type: 'dateFile',
            filename: __dirname + '/logs/common.log',
            pattern: ".yyyy-MM-dd"
        },
        error: {
            type: 'dateFile',
            filename: __dirname + '/logs/common.error.log',
            pattern: "yyyy-MM-dd"
        },
        console: {
            type: 'console'
        }
    },
    categories: {
        default: { appenders: ['common'], level: 'debug' },
        error: { appenders: ['console', 'error'], level: 'error' }
    }
});

exports.database = {
    DATABASE: 'Koa',
    USERNAME: 'root',
    PASSWORD: 'xiangyu',
    PORT: '3306',
    HOST: '127.0.0.1'
}

exports.common = log4js.getLogger('common');
exports.error = log4js.getLogger('error');