var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

app.set('port', port);

app.use(express.static('./platforms/browser/www'));

app.listen(app.get('port'), function () {
   console.log("Server Running on port: " + port)
});