const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const fs = require("fs");
const { hostname } = require("os");
const HOSTNAME = hostname || "192.168.0.104" || "127.0.0.1" || "localhost";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/test.html");
    res.sendFile(__dirname+"/index.html")
});

// app.get("/data", (req, res) => {
//     res.sendFile(__dirname + "/example.json");
// });

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

// app.post("/register", (req, res) => {
//   const email = req.body.username;
//   const pass = req.body.pass;
//   res.send(`OK`);
//   fs.writeFile('example.json', x, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });
// });

app.listen(PORT, hostname, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});