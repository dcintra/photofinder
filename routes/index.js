var express = require('express');
var router = express.Router();
var Flickr = require("flickrapi"),
             flickrOptions = {
                 api_key: "6ac3f568073aea1cca183c3ca08e974c",
                 secret: "9eadb76bb8109d45"
                };

function flickrphotoSearch(flickr, result, query, max_date, min_date, pageNumber, res){
  
  var parseduserid;
  if(result){
    console.log("userid:"+result.user.id);
    parseduserid = result.user.id;
  }else{

    parseduserid ='';
  }

  flickr.photos.search({
              text: query,
              page: pageNumber, 
              per_page: 500,
              max_upload_date: max_date,
              min_upload_date: min_date,
              user_id: parseduserid,
                            }, function(err, result) {
                              console.log("HERES THE FULL RESULT");
                              console.log(result);
                              var photos = result.photos.photo;
                              console.log("userID is: "+parseduserid);
                              console.log("query is: "+query);
                              console.log("datebefore is: "+max_date);
                              console.log("dateAfter is: "+min_date);
                              console.log(photos);
                              res.render('photos', {
                                                      query: query,
                                                      photosArray: photos
                               })
  });
          
}

function userSearch(flickr, username, query, max_date, min_date, pageNumber, res, callback){
  var parseduserid ='';
  console.log("user search function, username: "+username);
  if(username){
    flickr.people.findByUsername({
                                username: username,
                                }, function(err, result) {
                                        callback(flickr, result, query, max_date, min_date, pageNumber, res);
                                }); 
  }else{
    var noname = '';
    callback(flickr, noname, query, max_date, min_date, pageNumber, res);
  }
                       
}

function findPhotos(username, query, max_date, min_date, pageNumber, res, callback){
    console.log("AUTHENTICATING: "+username);
    Flickr.tokenOnly(flickrOptions, function(error, flickr) {
      callback(flickr, username, query, max_date, min_date, pageNumber, res, flickrphotoSearch);
    });
}

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

module.exports = router;


