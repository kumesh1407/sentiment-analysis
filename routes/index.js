var express = require('express');
var router = express.Router();
var Sentiment = require('sentiment');
var sentiment = new Sentiment();

var startImage='/images/start.jpg';
var happyImage='/images/happy.jpg';
var neutralImage='/images/neutral.jpg';
var negativeImage='/images/negative.jpg';
var confusedImage='/images/confused.png';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html');
});

router.get('/result/:message',function(req,res,next){
  var message = req.params['message'];
  var result = sentiment.analyze(message);
  console.log(result);
  var image;
  if(result.score>=1)
  {
    image=happyImage;
  }
  if(result.score==0)
  {
    image=neutralImage;
  }
  if(result.score<0)
  {
    image=negativeImage;
  }
  console.log(image);
  res.send(image);
});

module.exports = router;
