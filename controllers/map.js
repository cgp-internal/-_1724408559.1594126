const express = require('express');
const router = express.Router();
const mapCanvas = require('../public/index.html');

router.get('/', (req, res) => {
  res.sendFile(__dirname + '../public/index.html');
});

module.exports = router;