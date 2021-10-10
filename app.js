const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    let options = {
        root: path.join(__dirname, ''),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }

    let fileName = './index.html';
    res.sendFile(fileName, options);
});

app.get('/index.js', (req, res) => {
    let options = {
        root: path.join(__dirname, ''),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }

    let fileName = './index.js';
    res.sendFile(fileName, options);
});

app.get('/images/:name', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'images'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
  
    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })

app.listen(PORT, () => {
    console.log(`App has been started on port: ${PORT}.`);
})