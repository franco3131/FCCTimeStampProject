// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204
app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.get("/api/:date?", function(req, res) 
{
  let unix;
  let utc;
  let today;
  var dateString = req.params.date;
  if(dateString===undefined){
    console.log("here");
    today =Date.now();
    dateString=today;
}
  console.log(dateString);
  var dt = new Date(dateString);
  //if there is a remainder, then its an integer. Which means it is a unix number able to convert to utc.
  if((dateString%1)==0){
    utc=(new Date(parseInt(dateString,10))).toUTCString();
    unix=parseInt(dateString,10);
  }else{
    utc=dt.toUTCString();
    unix=(new Date(dateString).valueOf());
  }
  if(utc==="Invalid Date"){
    res.json({ error:"Invalid Date"});
  }else{
    res.json({ unix:unix, utc:utc});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
