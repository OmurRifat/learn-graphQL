const express = require('express');
const app = express();

const PORT = 5000 || process.env.PORT;

app.use('/', (req, res) => {
    res.send("Hey! I am working.")
})

app.listen(PORT, () => console.log("Listening from port: ", PORT))