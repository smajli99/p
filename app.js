const express = require('express');

const { urlencoded, json } = require('body-parser');

const users = require('./laptops');

const db = require('./db');

const app = express();

console.log("Hello");

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/db', (req,res) => {
    res.status(200).json(db.randomCocktail());
})

app.get('/users', (req, res) => {
    const allUsers = users.getAllUsers();
    res.status(200).json(allUsers);
});



app.use(json());
app.use(urlencoded({ extended: false }));

module.exports = app;

