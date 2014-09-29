var express = require('express');
var router = express.Router();
var Flickr = require("flickrapi"),
             flickrOptions = {
                 api_key: "6ac3f568073aea1cca183c3ca08e974c",
                 secret: "9eadb76bb8109d45"
                };
var test = 'gello'

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  });
});


router.get('/photos/:query?', function(req, res) {
    var query = req.params.query; 
    Flickr.tokenOnly(flickrOptions, function(error, flickr) {
      flickr.photos.search({
          text: query,
          page: 1,
          per_page: 10
                        }, function(err, result) {
                          console.log(result.photos.photo);
                          var photos = result.photos.photo;
                          res.render('photos', {
                            query: query,
                            photosArray: photos
                          })
                        });
    });
});

module.exports = router;


