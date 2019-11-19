const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const commentCtrl = require('../controllers/comment.controller');
const intelligence = require('../controllers/intelligence.controller');

const router = express.Router();
module.exports = router;

router.post('/text-to-speach', textToSpeach);

async function textToSpeach (req, res) {
  let download_url = await intelligence.getBaiduAudioFileByText(req.body)
  res.json(download_url);
}