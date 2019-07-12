const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('../api/routes/users');
const adminRoutes = require('../api/routes/admin');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes to handle requests
app.use(userRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.staus = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        status: 'error',
        error: 'something went wrong'
    })
})

module.exports = app; 