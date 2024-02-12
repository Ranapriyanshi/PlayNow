const cookieSession = require('cookie-session');
const express = require('express');
const session = require('express-session');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoute');

require('dotenv').config();
app.use(session({
    secret: "yourSecretKeyHere",
    resave: false,
    saveUninitialized: true,  
}));

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}));

app.use('/auth', authRoutes);

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
