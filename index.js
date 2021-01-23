const express = require('express');


const app = express();

app.get('/',(req,res)=>{
    res.send('All good!');
})

var unirest = require("unirest");

var req = unirest("GET", "https://www.fast2sms.com/dev/bulk");

req.query({
  "authorization": "YOUR_API_KEY_HERE....I_HAVE_DELETED_MINE :P",
  "sender_id": "FSTSMS",
  "message": "This is a test message sent by vishwajeet singh!",
  "language": "english",
  "route": "p",
  "numbers": "8888888888,7777777777",
});

req.headers({
  "cache-control": "no-cache"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});

app.listen(8080,()=>{
    console.log('App is up and running at port 8080!');
})