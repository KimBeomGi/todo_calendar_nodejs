const express = require('express')
const app = express()
const port = 8080

require('dotenv').config(); // dotenv 모듈을 로드하고 구성 파일을 읽어옵니다.

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`http://localhost:${port}에서 서버 실행`);
});

const baseRoute = require("./routes/router")
const userRoute = require("./routes/userRouter")
const todoRoute = require("./routes/todoRouter")

app.use('/', baseRoute)
app.use('/user', userRoute)
app.use('/todo', todoRoute)

app.get('*', (request, response) => {
  response.render("main/page404.ejs");
});