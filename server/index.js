import express from 'express';
import dbConfig from './config/db';
import middlewaresConfig from './config/middlewares';

const app = express();

// Database
dbConfig();

// Middlewares
middlewaresConfig(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } {
        console.log(`App listen to port: ${PORT}`);
    }
});