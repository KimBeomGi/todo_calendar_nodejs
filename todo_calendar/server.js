// npm install mysql 이걸로 mysql과 연동할 수 있음.

const express = require('express')
const app = express()
const port = 8080

require('dotenv').config(); // dotenv 모듈을 로드하고 구성 파일을 읽어옴.


// mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: process.env.MYSQL_DB
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

global.connection = connection;

// ejs
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`http://localhost:${port}에서 서버 실행`);
});

// router
const mainRoute = require("./routes/mainRouter")
const userRoute = require("./routes/userRouter")
const todoRoute = require("./routes/todoRouter")

app.use('/', mainRoute)
app.use('/user', userRoute)
app.use('/todo', todoRoute)

app.get('*', (request, response) => {
  response.render("main/page404.ejs");
});