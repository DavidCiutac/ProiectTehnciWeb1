const express = require('express')
const app = express();
const path = require('path');



app.get('/home',function(req,res) {
    res.sendFile('HomePiano.html', {root: path.join(__dirname)});
});
app.get('/harrystyles',function(req,res) {
    res.sendFile('HarryStyles.html', {root: path.join(__dirname)});
});
app.get('/arcticmonkeys',function(req,res) {
    res.sendFile('ArcticMonkeys.html', {root: path.join(__dirname)});
});
app.get('/ayo',function(req,res) {
    res.sendFile('Ayo.html', {root: path.join(__dirname)});
});
app.get('/login',function(req,res) {
    res.sendFile('LogInPage.html', {root: path.join(__dirname)});
});
app.get('/register',function(req,res) {
    res.sendFile('RegisterFile.html', {root: path.join(__dirname)});
});






app.use('/css', express.static(path.join(__dirname,'/css')));
app.use('/js', express.static(path.join(__dirname,'/js')));
app.use('/img', express.static(path.join(__dirname,'/img')));
app.use('/video', express.static(path.join(__dirname,'/video')));

app.use((req, res, next) => {
    res.status(404).sendFile("404.html", {root: path.join(__dirname)});
  });

app.listen(3100);