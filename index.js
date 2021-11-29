const express = require('express');
const cors = require('cors');
const path = require('path');
//const fetch = require('node-fetch');

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

const callBackFunc = function (err) {
    if (err) {
        console.log('Error');
        res.status(500).send(err);
    }
};

app.get("/get/assets*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/assets.json'), callBackFunc);
});

app.get("/get/history*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/history.json'), callBackFunc);
});

app.get("/get/markets*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/markets.json'), callBackFunc);
});

app.get("/get/exchanges*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/exchanges.json'), callBackFunc);
});

app.get("/get/rates*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/rates.json'), callBackFunc);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), callBackFunc);
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
