var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var session = require("express-session");
//파일 불러오기 위해서 쓴다고 함...
var fs = require("fs");

//ejs engine 쓰는 거 같음..!
//view 경로 설정
app.set("views", __dirname + "/views");
//화면 엔진을 ejs로 설정 (사실 그냥 sendfile 하는게 편하다곤 함... -> 나중에 ejs파일 사용해보려고)
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//3000번 포트 열기
var server = app.listen(3000, function () {
  console.log("Express server has started on port 3000");
});

//css. img 와 같은 src들 public으로 지정
app.use(express.static(__dirname + "/public"));

//session 쓰려고 만들어봄..!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(
  session({
    secret: "1234",
    resave: false,
    saveUninitialized: true,
  })
);

var router = require("./router/main")(app, fs);
