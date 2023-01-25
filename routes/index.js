var express = require('express');
var router = express.Router();
const pool = require('../db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/ping', async function(req, res, next) {
  const result = await pool.query('SELECT "hello world" as RESULT');
  console.log(result[0])
  res.json(result[0]);
});

module.exports = router;

router.get('/create', async function(req, res, next) {
  const [raws] = await pool.query('SELECT * FROM users')
  res.json(raws);
});

module.exports = router;