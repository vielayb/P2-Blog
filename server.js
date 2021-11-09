const path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');
var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

app.listen(PORT, function(){
    console.log('http://localhost:3000')
});
