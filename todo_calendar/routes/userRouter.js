const express = require('express')
const router = express.Router()

router.get('/', function(request, response){
  response.send('여기는 userRouter!')
})
router.get('/1', (request, response) => {
  response.render('../views/user/user.ejs', {  });
});

module.exports = router