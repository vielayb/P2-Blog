const router = require('express').Router();
const userRoutes = require('./user-routes');
const homeRoutes = require('../home-routes.js');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/', homeRoutes);
router.use('/posts', postRoutes);

module.exports = router;