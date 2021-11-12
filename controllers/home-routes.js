const router = require('express').Router();
const { User, Post, Comment, } = require('../models');

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/blogs', function (req, res) {
  const posts = {blogs:[{id:"1", img:"http://via.placeholder.com/300", post:'hello'},{id:"2", img:"http://via.placeholder.com/300", post:'hello'},{id:"3", img:"http://via.placeholder.com/300", post:'hello'}]}
  res.render('blog', posts)
});

router.get('/post', function (req, res) {
  res.render('post');
});

router.get('/dashboard', function (req, res) {
  res.render('dashboard');
});

router.get('/dashboard/edit/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const post = dbPostData.get({plain:true});
      res.render('singlepost', post);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;