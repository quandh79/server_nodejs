const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
    path: './config.env'
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

const app = require('./app');

const database = "mongodb+srv://ungsymui:Usm03091991@cluster0.c0navp3.mongodb.net/?retryWrites=true&w=majority";

// Connect the database
mongoose.connect(database, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(con => {
    console.log('DB connection Successfully!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Application is running on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});