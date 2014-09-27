var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Flickr = require("flickrapi"),
             flickrOptions = {
                 api_key: "6ac3f568073aea1cca183c3ca08e974c",
                 secret: "9eadb76bb8109d45"
                };
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


//FLICKR
// app.get('/photos/:query', function(req, res) {
//     var query = req.params.query; 
//     Flickr.tokenOnly(flickrOptions, function(error, flickr) {
//       flickr.photos.search({
//           text: query,
//           page: 1,
//           per_page: 500
//                         }, function(err, result) {
//                           console.log(result.photos.photo[1]);
//                           var farmId = result.photos.photo[1].farm;
//                           var serverId = result.photos.photo[1].server;
//                           var id = result.photos.photo[1].id;
//                           var secretId = result.photos.photo[1].secret;
//                           var url = "http://farm"+farmId+".staticflickr.com/"+serverId+"/"+id+"_"+secretId+".jpg"
//                           res.render('index', {
//                             title:result.photos.pages+6, 
//                             id: url

//                           })
//                         });
//     });
// });



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
