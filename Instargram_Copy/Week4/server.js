const express = require("express");
const path = require("path");
const app = express();
const port = 5870;

app.listen(port);

app.get("/",(req,res)=> {res.sendFile(path.join(__dirname+"/public/page1.html"))});
app.get("/",(req,res)=> {res.sendFile(path.join(__dirname+"/public/week2.html"))});
app.get("/",(req,res)=> {res.sendFile(path.join(__dirname+"/public/week3.html"))});

app.use(express.static(path.join(__dirname+"/public")));

