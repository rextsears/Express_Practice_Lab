const express = require('express');

const app = express();

const path = require('path');
const studentsDb = require('./data/students-db');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  
  

app.get('/', function(req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/students', function(req, res) {
    res.render('students/index', {
      students: studentsDb.getAll()
    });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
