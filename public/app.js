const express = require('express');
const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.listen(3030);

