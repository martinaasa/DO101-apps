const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 3 igen of the app, hurr durr burr jurr.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
