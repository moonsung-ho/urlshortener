const mongoose = require('mongoose')
const http = require('http');
const express = require('express');
const app = express();
const url = require('url');

const server = http.createServer(app);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/urlsubmit', (req, res) => {
    if (req.query.custom === "none") {
        let random = Math.random().toString(36).substr(2, 6)
        if (model.find({ shorturl: random }, (err, data) => {
            random = Math.random().toString(36).substr(2, 6)
        }));
        res.redirect(`urlsubmitted.html?url=${random}`);
        db.collection('urls').insertOne({
            longurl: req.query.url,
            shorturl: random
        }, (err) => {
            if (err) return console.log(err)
        })
    } else if (req.query.custom !== "none") {
        model.find({ shorturl: req.query.custom }, (err, data) => {
            if (data.toString().length > 3) {
                res.redirect(`/?urlused=true`);
            } else {
                res.redirect(`urlsubmitted.html?url=${req.query.custom}`);
                db.collection('urls').insertOne({
                    longurl: req.query.url,
                    shorturl: req.query.custom
                }, (err) => {
                    if (err) return console.log(err)
                })
            }
        })
    }
});

app.get('/*', (req, res) => {
    let path = url.parse(req.url).pathname.replace("/favicon.ico", "").replace("/", "");
    if (path) {
        model.find({ shorturl: path }, (err, data) => {
            if (data.toString().length < 2) {
                res.send("404 - 찾을 수 없음");
            } else if (err) {
                console.log(err);
            } else if (data !== []) {
                if (data[0].longurl.includes('http')) {
                    res.redirect(data[0].longurl);
                } else {
                    res.redirect('https://' + data[0].longurl);
                }
            } else {
                res.send("알 수 없는 에러");
            }
        }
        )
    }
    else {
        res.render('index.html');
    }
});

mongoose.connect('mongodb+srv://sungho:Q*pzErQD8e4*v.S@cluster0.sytmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
})
const Schema = new mongoose.Schema({
    shorturl: String,
    longurl: String
})
const nameSchema = new mongoose.Schema({
    url: String
})
const model = mongoose.model('urls', Schema);
const db = mongoose.connection;

server.listen(process.env.PORT || 80, () => {
    console.log('Server is running on port 80');
});
