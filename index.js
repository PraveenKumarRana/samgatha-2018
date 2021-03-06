const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
require('./services/passport');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(passport.initialize());

require('./routes/authRoutes')(app);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}...`);
});