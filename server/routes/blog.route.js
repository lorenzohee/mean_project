const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const blogCtrl = require('../controllers/blog.controller');
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, '' + Date.now() + '-' + file.originalname)
  }
})

var upload = multer({ storage: storage })

const router = express.Router();
module.exports = router;

router.post('/upload', passport.authenticate('jwt', { session: false }), upload.single('blogBanner'), postBanner);
router.post('/', passport.authenticate('jwt', { session: false }), insert);
router.get('/', index);
router.put('/:id', passport.authenticate('jwt', { session: false }), update);
router.get('/:id', detail);
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy);

async function insert (req, res) {
  let blog = await blogCtrl.insert(req.body);
  res.json(blog);
}

async function detail (req, res) {
  let blog = await blogCtrl.detail(req.params.id);
  res.json(blog)
}

async function index (req, res) {
  let blogs = await blogCtrl.index(req.query);
  res.json(blogs);
}

async function update (req, res) {
  let blog = await blogCtrl.update(req.body, req.params.id);
  res.json(blog)
}

async function destroy (req, res) {
  let blog = await blogCtrl.destroy(req.params.id)
  res.json(blog)
}

async function postBanner (req, res) {
  var file = req.file;
  res.json(file)
}