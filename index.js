const express = require('express');
const cors = require('cors');
const path = require('path');
//const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;
//const API_KEY = process.env.KEY || 0;


app.use(cors());

app.use(express.static("public"));


const callBackOnError = function (err) {
    if (err) {
        console.log('Error');
        //res.status(500).send(err);
    }
};

/*const options = (endfix) => {
    return {
        'method': 'GET',
        'url': 'api.coincap.io/v2/'+endfix,
        'headers': {}
    };
};*/

app.get("/get/assets*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/assets.json'), callBackOnError);
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

app.listen(port, () => {
    console.log(`Example port listening at http://localhost:${port}`);
});



/*
// Error callback
const callBackOnError = function (err) {
    if (err) {
        console.log('Error', err);
        //response.status(500).send(err);
    }
};

// AXIOS request options
const requestOptions = {
    // Headers for Authorization API key
    headers: (API_KEY) ? { "Authorization": `Bearer ${API_KEY}` } : {}
};

// Fetch data from the API, check the data and send it
const fetchAndCheck = async (pathForURL, redirectUrl, response) => {
    // Full URL
    const url = 'https://api.coincap.io/v2' + pathForURL;
    // Try to fetch and check the data
    try {
        // Fetch data from the server
        const res = await axios.get(url, requestOptions);
        // Was the request succesfull?
        if (res.status === 200) {
            // Success
            console.log("(200): success");
            // Get the data from response
            const data = await res.data;
            // Print data into console
            //console.log('Data: ', data);
            // Check if data is null or if the API rate limit has been reached
            if ((data && !data.data) ||
                //data.data.includes("You exceeded your 200 request(s) rate limit of your FREE plan") ||
                data.data.includes("You exceeded your")) {
                    // Limit exceeded
                    console.log('Error: API rate limit exceeded');
                    // Send dummy data from file
                    response.sendFile(path.join(__dirname, redirectUrl), callBackOnError);
                    // Return from the function
                    return;
            } response.send({ data });
        } else {
            // Request wasn't succesfull
            console.log(`Error: status code (${res.status})`);
            response.sendFile(path.join(__dirname, redirectUrl), callBackOnError);
        }

    } catch (e) {
        // On error, send dummy data
        console.log('Error: ', e);
        response.sendFile(path.join(__dirname, redirectUrl), callBackOnError);
    }

}

// API calls:
app.get("/get/assets*", async function (req, response) {
    await fetchAndCheck('/assets', 'public/assets.json', response);
});

app.get("/get/history/:coin*", async function (req, response) {
    const pathForURL = `/assets/${req.params.coin}/history?interval=d1`;
    await fetchAndCheck(pathForURL, 'public/history.json', response);
});

app.get("/get/markets/:coin*", async function (req, response) {
    const pathForURL = `/assets/${req.params.coin}/markets`;
    await fetchAndCheck(pathForURL, 'public/markets.json', response);
});

app.get("/get/exchanges*", async function (req, response) {
    await fetchAndCheck('/exchanges', 'public/exchanges.json', response);
});

app.get("/get/rates*", async function (req, response) {
    await fetchAndCheck('/rates', 'public/rates.json', response);
});


// Application:
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), callBackOnError);
});

app.listen(port, () => {
    console.log(`Example port listening at http://localhost:${port}`);
});*/
