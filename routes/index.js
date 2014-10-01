var express = require('express');
var router = express.Router();
var Flickr = require("flickrapi"),
             flickrOptions = {
                 api_key: "6ac3f568073aea1cca183c3ca08e974c",
                 secret: "9eadb76bb8109d45"
                };



//////////////////////////////////
// Routes
//////////////////////////////////
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  });
});


router.get('/photos/term=:query?min_date=:dateAfter?max_date=:dateBefore?usernm=:userName?page=:pageNumber?', function(req, res) {
    var query = req.params.query; 
    var dateAfter = req.params.dateAfter; 
    var dateBefore = req.params.dateBefore;
    var userName = req.params.userName; 
    var userId = '';
    var pageNumber = req.params.pageNumber;
    
    // photo search function
    findPhotos(userName, query, dateBefore, dateAfter, pageNumber, res, userSearch);

});

router.get('/*', function(req, res) {
  res.render('error', { 
  });
});

//////////////////////////////////
// Flickr Photo Search Functions
//////////////////////////////////

function flickrphotoSearch(flickr, result, query, max_date, min_date, username, pageNumber, res){
  
  var parseduserid;
  var username;
  if(result){
    parseduserid = result.user.id;
    username = username;
  }else{

    parseduserid ='';
  }

  flickr.photos.search({
              text: query,
              page: pageNumber, 
              per_page: 10,
              max_upload_date: max_date,
              min_upload_date: min_date,
              user_id: parseduserid,
                            }, function(err, result) {
                              var pages = result.photos.pages;
                              var photos = result.photos.photo;
                              console.log(photos);
                              res.render('photos', {
                                                      query: query,
                                                      photosArray: photos,
                                                      page: pageNumber,
                                                      username: username, 
                                                      pages: pages,
                                                      max_upload_date: max_date,
                                                      min_upload_date: min_date,
                               })
  });
          
}

function userSearch(flickr, username, query, max_date, min_date, pageNumber, res, flickrphotoSearch){
  var parseduserid ='';
  console.log("user search function, username: "+username);
  if(username){
    flickr.people.findByUsername({
                                username: username,
                                }, function(err, result) {
                                  console.log("userid is: "+result);
                                        flickrphotoSearch(flickr, result, query, max_date, min_date, username, pageNumber, res);
                                }); 
  }else{
    var noname = '';
    flickrphotoSearch(flickr, noname, query, max_date, min_date, username, pageNumber, res);
  }
                       
}

function findPhotos(username, query, max_date, min_date, pageNumber, res, userSearch){
    Flickr.tokenOnly(flickrOptions, function(error, flickr) {
      userSearch(flickr, username, query, max_date, min_date, pageNumber, res, flickrphotoSearch);
    });
}



module.exports = router;


