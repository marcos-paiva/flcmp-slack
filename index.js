const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const getPhrases = require('./src/getPhrases')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    var responseObj = {};

    if (req.body.text === 'rand') {

        getPhrases.get().then(function(response){
            responseObj = {
                response_type: req.body.channel_id,
                text: response.data
            }
        }).catch(function (error) {
            console.log(error);
        })

    } else {

        responseObj = {
            response_type: "ephemeral",
            text: 'Command not found'
        }
    }

    res.json(responseObj);
});

let port = process.env.PORT || 3001;
app.listen(port);