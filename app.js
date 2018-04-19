require('dotenv').config();
const express = require('express');
const app = express();
const Twig = require('twig');

// const interpolate = require('./src/math/interpolate');

const temperature = require('./src/core/Temperature');
const stress = require('./src/core/AllowableStress');

let tempInput = '330f';
let matlInput = 'e0a';

// let caseTemperature = new temperature(tempInput);
let AllowStress = stress.alws(matlInput, new temperature(tempInput));

const port = process.env.PORT || 3000;

// This section is optional and used to configure twig.
app.set("twig options", {
    strict_variables: false
});

// Routing for Application
app.get('/', function (req, res) {
  //res.setHeader('Content-Type','text/html');
  //res.send('Hello World! Welcome :: ABCD');

  // let n = interpolate.linear(0,10,0,100,5);
  res.render('index.twig', {
    message : 'Temperature is ' + mtemp.value
    // message : 'Hello Work'
  });
});

app.use((req, res, next) => {
  res.status(400).send('Page cannot be found!');
});

app.listen(port, () => console.log(`This application listening on port ${ port }!`));
