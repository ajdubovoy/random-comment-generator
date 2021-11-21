var express = require('express');
var router = express.Router();
var useComments = require('../hooks/use_comments');

/* GET home page. */
router.get('/', function(req, res, next) {
  var comments = useComments();
  res.send({ comments });
});

module.exports = router;
