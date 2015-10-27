var winston = require( 'winston' ),
    fs = require( 'fs' ),
    logDir = 'logs';

winston.setLevels( winston.config.npm.levels );
winston.addColors( winston.config.npm.colors );

if ( !fs.existsSync( logDir ) ) {
    fs.mkdirSync( logDir );
}
logger = new( winston.Logger )( {
    transports: [
        new winston.transports.Console( {
            level: 'info',
            colorize: true
        } ),
        new winston.transports.File( {
            name: 'logs-file',
            level: 'debug',
            filename: logDir + '/logs.log',
            maxsize: 1024 * 1024 * 10
        }),
        new winston.transports.File( {
            name: 'errors-file',
            level: 'error',
            filename: logDir + '/errors.log',
            maxsize: 1024 * 1024 * 10
        } )
    ],
    exceptionHandlers: [
        new winston.transports.File( {
            filename: 'logs/exceptions.log'
        } )
    ]
} );

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.debug(message);
    }
};