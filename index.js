const { setupApp } = require('./setupApp');
const { APP_PORT } = require('./config');
const passport = require('./passport');

const app = setupApp(passport);
app.listen(APP_PORT);
