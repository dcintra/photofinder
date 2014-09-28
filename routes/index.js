var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  query: 'sdsda' 
  });
});

router.get('/photos', function(req, res) {
  res.locals.query = req.params;
  res.render('index', {
  	
  });
});

module.exports = router;
