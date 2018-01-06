// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 

// express-useragent is a simple NodeJS/ExpressJS user-agent middleware exposing user-agent details to your application and views.
var useragent = require('express-useragent');
app.use(useragent.express());


app.get('/', function (req, res) {

    var lang = req.acceptsLanguages('ru', 'en-US', 'ru-mo', 'be')
    var sw = req.useragent.os + " " + req.useragent.source.split('(')[1].split(')')[0]
    var ip = (req.headers['x-forwarded-for'] || '').split(',')[0] 
        || req.connection.remoteAddress;
    
    var output = {
        ipaddres:ip,
        languages: lang,
        software: sw
    }

    res.send(output)

})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
