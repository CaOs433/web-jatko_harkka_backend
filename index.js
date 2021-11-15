const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.static("public"));

// http://localhost:3000/
/*app.get("/", (req, res) => {
    res.send("Hello World!");
});*/

app.listen(port, () => {
    console.log(`Example port listening at http://localhost:${port}`);
});
