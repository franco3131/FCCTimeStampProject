// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204


app.get("/api/:date?", function(req, res) 
{
  let unix;
  let utc;
  let today;
  var dateString = req.params.date;
  if(dateString===undefined){
    console.log("here");
    today =new Date().toLocaleDateString("en-US"); 
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











  

  









  
//   var dateString = req.params.date;
//   // if(Date.parse(dateString)!=NaN){
// var timeZone="";
//         // if(Number.isInteger(parseInt(dateString,10))===true){
        //   console.log("hhhheeer");
        //   var milliseconds = dateString/10;     
          
          //1451001600000
          
          // var dateObject = new Date(milliseconds);
          // console.log(dateObject.toLocaleString());
          // var year=dateObject.toLocaleString("en-US", {year: "numeric"});
          // console.log(year);
          // var month=dateObject.toLocaleString("en-US",            {month: "long"}) ;
          // var day=dateObject.toLocaleString("en-US",               {day: "numeric"});
          //   dateString=year+"/"+month+"/"+day+" "+ dateObject.getTimezoneOffset();
   
       
      
            // }
  //   console.log(dateString);
  // var dt = new Date(dateString);
//   var wordDay=dt.toLocaleDateString('en', { weekday: 'long' });
// //unix":1451001600000,"utc":"Fri, 25 Dec 2015 00:00:00 GMT"
// var month=dt.toLocaleString('en', { month: 'short' })
//   var responseString =wordDay+", "+ dt.getDate()+" "+month+" "+dt.getFullYear()+" "+ +dt.getTimezoneOffset();
  //   var responseString=dt.toUTCString();
  //   console.log(responseString);
  // var unix=(new Date(dateString).valueOf());
  // if(responseString==="Invalid Date"){
  //     res.json({ error:"Invalid Date"});
  // }else{
  // res.json({ unix:unix, utc:responseString});
  // }
  
  // }});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
