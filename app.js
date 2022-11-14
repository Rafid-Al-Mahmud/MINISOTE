const express = require("express");
const app = express();
const window = require("./nodeWin.js");


app.get("/", (req,res) => {
    res.send("I am a get request at home route.");
});

app.put("/", (req,res) => {
    res.send("I am a put request at home route.");
});

app.get("/about", (req,res) => {
    res.send("I am a get request at about route.");
});

app.get("/contact", (req,res) => {
    res.send("I am a get request at contact home route.");
});

app.get("/projects", (req,res) => {
    res.send("I am a get request at projects home route.");
});

app.get(/.*/, (req,res) => {
    res.sendFile(__dirname+req.url); 
});

module.exports = app;