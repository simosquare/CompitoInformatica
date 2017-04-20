'use strict';
const express = require('express');
const app = express();

app.listen(8000, () => {
    console.log('Server avviato');
});

app.get('/autore', function (req, res) {
  res.send('<h1>Sito di Simone piazza</h1>')
});

app.get('/', function (req, res) {
  res.send('<h1>Homepage</h1>')
});

app.get('*', function (req, res) {
  res.status(404).send('Not found!')
});
