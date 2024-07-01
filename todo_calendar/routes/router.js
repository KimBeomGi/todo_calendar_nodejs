const express = require('express')
const router = express.Router()

const tmpHOST = process.env.TMP_VALUE

router.get('/', (request, response) => {
  response.render('../views/main/main.ejs', {  });
});

router.get('/about', (request, response) => {
  response.render('../views/main/about.ejs', {data: tmpHOST});
});
console.log(tmpHOST)

// // html은 sendFile 이용
// router.get('/gi', function(request, response) {
//   response.sendFile(__dirname + '/views/gi.html')
// });

const path = require('path');

router.get('/gi', function(request, response) {
  response.sendFile(path.join(__dirname, '..', 'views', 'main', 'gi.html'));
});

module.exports = router