const { createLogger, format, transports } = require('winston');

const {
  combine,
  timestamp,
  colorize,
  printf,
} = format;

const logFormat = printf(log => `${log.timestamp} ${log.level}: ${log.message}`);

function loggerFactory() {
  return createLogger({
    level: process.env.LOGGER_LEVEL || 'debug',
    format: combine(
      colorize(),
      timestamp(),
      logFormat,
    ),
    transports: [
      new transports.Console(),
    ],
  });
}

module.exports = loggerFactory;
