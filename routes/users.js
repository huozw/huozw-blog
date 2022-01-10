var express = require('express');
var path = require('path');
var router = express.Router();
var connect = require(path.resolve(__dirname, '../db'));
const testDb = connect('test');

router.get('/getDbData', function (req, res) {
  testDb.query('select * from user', function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(JSON.stringify(result));
    }
  });
});

router.post('/signup', function (req, res) {
  console.log(req.body);
  res.json({
    code: 200,
    data: req.body,
  });
});

module.exports = router;
