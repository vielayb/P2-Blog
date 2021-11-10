const router = require('express').Router();


router.get('/', function (req, res) {
  res.render('home');
});

router.get('/blogs', function (req, res) {
  const posts = {blogs:[{img:"http://via.placeholder.com/300", post:'hello'},{img:"http://via.placeholder.com/300", post:'hello'},{img:"http://via.placeholder.com/300", post:'hello'}]}
  res.render('blog', posts)
});


router.get('/post', function (req, res) {
  res.render('post');
});

router.get('/dashboard', function (req, res) {
  res.render('dashboard');
});

module.exports = router;