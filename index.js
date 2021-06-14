const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Require for CSS and static data
app.use(express.static(path.join(__dirname, '/templates')));

// define a simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/templates/index.html'));
});

// define a simple route
/*app.get('/images/favicon', (req, res) => {
    res.sendFile(path.join(__dirname+'/templates/images/Icon_Remindoze.jpg'));
});*/

// sitemap
/*app.get('/sitemap.xml', function(req, res) {
    res.sendFile(__dirname+'/sitemap.xml');
});*/

// listen for requests
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8080;
  }
app.listen(port, () => {
    console.log("Server is listening on port 8080");
});