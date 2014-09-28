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
          per_page: 500
                        }, function(err, result) {
                          console.log(result.photos.photo[1]);
                          var farmId = result.photos.photo[1].farm;
                          var serverId = result.photos.photo[1].server;
                          var id = result.photos.photo[1].id;
                          var secretId = result.photos.photo[1].secret;
                          var url = "http://farm"+farmId+".staticflickr.com/"+serverId+"/"+id+"_"+secretId+".jpg"
                          res.render('photos', {
                            query: query,
                            test: test,
                            title:result.photos.pages, 
                            image: url
                          })
                        });
    });
});

module.exports = router;


// exports.index = function(request, response){
// 	response.render('default', {
// 		title: 'Home',
// 		classname: 'home',
// 		users: ['Ray', 'Morten', 'James']
// 	});
// }

// exports.photos = function(request, response){
// 	response.render('default', {
// 		title: 'About',
// 		classname: 'about'
// 	});
// }



//FLICKR
// app.get('/photos/:query', function(req, res) {
//     var query = req.params.query; 
    // Flickr.tokenOnly(flickrOptions, function(error, flickr) {
    //   flickr.photos.search({
    //       text: query,
    //       page: 1,
    //       per_page: 500
    //                     }, function(err, result) {
    //                       console.log(result.photos.photo[1]);
    //                       var farmId = result.photos.photo[1].farm;
    //                       var serverId = result.photos.photo[1].server;
    //                       var id = result.photos.photo[1].id;
    //                       var secretId = result.photos.photo[1].secret;
    //                       var url = "http://farm"+farmId+".staticflickr.com/"+serverId+"/"+id+"_"+secretId+".jpg"
    //                       res.render('index', {
    //                         title:result.photos.pages+6, 
    //                         id: url

    //                       })
    //                     });
    // });
// });