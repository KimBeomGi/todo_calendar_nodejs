const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
  response.send('여기는 todoRouter!')
})
router.get('/1', (request, response) => {
  response.render('todo/todos.ejs', {  });
});
router.get('/record', (request, response) => {
  response.render('todo/todos.ejs', {  });
})

module.exports = router