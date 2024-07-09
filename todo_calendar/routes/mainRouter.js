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

router.get('/gettodo', (request, response) => {
  const { year, month, date } = request.query;

  const startDate = `${year}-${month}-${date}`;
  const endDate = `${year}-${month}-${date}`;

  const query = `
    SELECT * FROM todos 
    WHERE start_date <= ? 
    AND (end_date >= ? OR end_date IS NULL)
  `;

  connection.query(query, [startDate, endDate], (error, results) => {
    if (error) {
      return response.status(500).json({ error: error.message });
    }
    response.json(results);
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