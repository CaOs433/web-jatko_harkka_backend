const express = require('express');
const cors = require('cors');
const path = require('path');
const request = require('request');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.static("public"));

// http://localhost:3000/
/*app.get("/", (req, res) => {
    res.send("Hello World!");
});*/

/*const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
}*/

const callBackOnError = function (err) {
    if (err) {
        console.log('Error');
        res.status(500).send(err);
    }
};

const options = (endfix) => {
    return {
        'method': 'GET',
        'url': 'api.coincap.io/v2/'+endfix,
        'headers': {}
    };
};

app.get("/get/assets*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/assets.json'), callBackOnError);
    //req.pipe(request("https://api.coincap.io/v2/assets")).pipe(res);
    /*request(options("assets"), function (error, response, _res = res) {
        callBackOnError(error);
        console.log(response.body);

        if (response.body.includes("You exceeded your 200 request(s) rate limit of your FREE plan")) {
            _res.sendFile(path.join(__dirname, 'public/assets.json'), callBackOnError);
        } else {
            _res.send(response.body);
        }
    });*/
});

app.get("/get/history*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/history.json'), callBackOnError);
});

app.get("/get/markets*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/markets.json'), callBackOnError);
});

app.get("/get/exchanges*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/exchanges.json'), callBackOnError);
});

app.get("/get/rates*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/rates.json'), callBackOnError);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), callBackOnError);
});

/*app.get("/get/assets", (req, res) => {
    async function getAssets() {
        const data = await fetchData("https://api.coincap.io/v2/assets");
        res.send(data);
    }

    getAssets();

});*/

app.listen(port, () => {
    console.log(`Example port listening at http://localhost:${port}`);
});
