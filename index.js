const setupApp = require('./setupApp');

const { APP_PORT } = require('./config');

const app = setupApp();

app.listen(APP_PORT);
