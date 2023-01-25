var express = require('express');
var router = express.Router();
const pool = require('../db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/ping', function(req, res, next) {
  res.send('PING');
});

module.exports = router;