const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const cmdParser = require('./cmdParser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    const reqres = cmdParser(req.body);
    res.send(reqres);
});

let port = process.env.PORT || 3001;
app.listen(port);