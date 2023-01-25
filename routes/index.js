var express = require('express');
var router = express.Router();
const pool = require('../db.js')/* conexión base datos */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola mundo desde express')
});

module.exports = router;

router.get('/ping', async function(req, res, next) { /* async tiene que tener await */
  const result = await pool.query('SELECT "hello world" as RESULT');
  console.log(result[0])
  res.json(result[0]);
});

module.exports = router;

router.get('/create', async function(req, res, next) { /*  */
  const [rows] = await pool.query('SELECT * FROM users')
  res.json(rows);
});

module.exports = router;