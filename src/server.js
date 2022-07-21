const app = require('./app');
const logger = require('./utils/logger');

const PORT = process.env.PORT || 4242;

// declaring app to listen
const server = app.listen(PORT, () => {
  logger.info(`
    ################################################
    🚀 Server listening on port: ${PORT} 🚀
    ################################################
`);
});
