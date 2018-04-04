require('dotenv').config();
const express = require('express');
const app = express();
const Twig = require('twig');

const port = process.env.PORT || 3000;

// This section is optional and used to configure twig.
app.set("twig options", {
    strict_variables: false
});

// Routing for Application
app.get('/', function (req, res) {
  //res.setHeader('Content-Type','text/html');
  //res.send('Hello World! Welcome :: ABCD');
  res.render('index.twig', {
    message : 'Hello my world'
  });
});

app.use((req, res, next) => {
  res.status(400).send('Page cannot be found!');
});

app.listen(port, () => console.log(`Example app listening on port ${ port }!`));
