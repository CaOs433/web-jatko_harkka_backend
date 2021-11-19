const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.static("public"));

// http://localhost:3000/
/*app.get("/", (req, res) => {
    res.send("Hello World!");
});*/

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'), function (err) {
        if (err) {
            console.log('Error');
            res.status(500).send(err);
        }
    });
});

app.listen(port, () => {
    console.log(`Example port listening at http://localhost:${port}`);
});
