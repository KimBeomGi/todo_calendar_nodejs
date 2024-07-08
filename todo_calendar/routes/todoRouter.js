const express = require('express')
const router = express.Router()
const connection = global.connection; // mysql connection을 global로 가져옴

// 일정 목록
router.get('/', function(request, response){
  // response.send('여기는 todoRouter!')
  const sql = 'SELECT * FROM todos'

  connection.query(sql, (error, results, fields) => {
    if(error){
      console.error('Error fetching data from todos table:', error)
      response.status(500).send('Database error')
      return
    }
    console.log(results)
    response.render('todo/todos.ejs', { todos: results });
  })

})
router.get('/1', (request, response) => {
  response.render('todo/todos.ejs', {  });
});
// 일정 생성 화면
router.get('/record', (request, response) => {
  response.render('todo/todoRecord.ejs', {  });
})

// 일정 생성
router.post('/record/create', (request, response) => {
  const { title, color, content, location, start_date, start_time, end_date, end_time } = request.body;

  const sql = `
    INSERT INTO todos (title, color, content, location, start_date, start_time, end_date, end_time)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  connection.query(sql, [title, color, content, location, start_date, start_time, end_date, end_time], (error, results, fields) => {
    if (error) {
      console.error('Error inserting data into todos table:', error);
      response.status(500).send('Database error');
      return;
    }
    
    response.redirect('/');
  });
});


module.exports = router