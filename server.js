const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connections');
const path = require('path');

//Using cookies reference 14.2.5
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
   db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3000;

//adding handlebars reference 14.1.3
var exphbs  = require('express-handlebars');
const hbs = exphbs.create({});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//I added this, reference just-tech-news 14.1.4
app.engine('handlebars', hbs.engine);
/*what was previously here*/
// app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//Using cookies reference 14.2.5
app.use(session(sess));
app.use(express.static('public/stylesheets/images'));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });