const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const blogRoutes = require('./blog.route');
const commentRoutes = require('./comment.route');
const feedBackRoutes = require('./feedback.route');
const cfgRoutes = require('./cfg.route');
const intelligenceRoutes = require('./intelligence.route')

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);
router.use('*', (req, res, next) => {
  next();
})

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/feedback', feedBackRoutes);
router.use('/cfgs', cfgRoutes);
router.use('/intelligence', intelligenceRoutes)

module.exports = router;
