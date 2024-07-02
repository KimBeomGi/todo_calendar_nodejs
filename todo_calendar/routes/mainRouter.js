const express = require('express')
const router = express.Router()
const connection = global.connection; // mysql connection을 global로 가져옴

const tmpHOST = process.env.TMP_VALUE

router.get('/', (request, response) => {
  response.render('../views/main/main.ejs', {  });
});

router.get('/about', (request, response) => {
  response.render('../views/main/about.ejs', {data: tmpHOST});
});

router.get('/data', (req, res) => {
  connection.query('SELECT * FROM todos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


// // html은 sendFile 이용
// router.get('/gi', function(request, response) {
//   response.sendFile(__dirname + '/views/gi.html')
// });

const path = require('path');

router.get('/gi', function(request, response) {
  response.sendFile(path.join(__dirname, '..', 'views', 'main', 'gi.html'));
});

module.exports = router