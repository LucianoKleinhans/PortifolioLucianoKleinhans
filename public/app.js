// npm install express --save
// npm install ejs --save
// npm install -g nodemon --save #
// npm install vanilla-tilt --save

const express = require('express');
const app = express();
app.use(express.static('source'));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname+'/html/index.html');
});

app.listen(3030);

