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

app.get('/bolgs', function (req, res) {
    const posts = {blogs:[{img:"http://via.placeholder.com/300", post:'hello'},{img:"http://via.placeholder.com/300", post:'hello'},{img:"http://via.placeholder.com/300", post:'hello'}]}
    res.render('blog', posts)
});


app.get('/post', function (req, res) {
    res.render('post');
});

app.listen(PORT, function(){
    console.log('http://localhost:3000')
});