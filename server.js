const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cors = require('cors');

app.use(cors({ exposedHeaders: ['x-access-token']}));
app.use(bodyParser.json());

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
