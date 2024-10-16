require("./config/config");
require("./model/db");
const compression = require('compression');
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());

const corsOptions = {
    origin: 'http://localhost:4200', // Your Angular app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allows credentials to be sent
};

app.use(cors(corsOptions));

// Handle preflight requests
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(require('./routes/index.route'));

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        const valError = [];
        Object.keys(err.errors).forEach(key => valError.push(err.errors[key].message));
        return res.status(422).send(valError);
    }
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/www"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'www', 'index.html'));
    });
}

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
