const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes");
const db = require("./db/index");

app.use(express.static("./client/dist"));
app.use(bodyParser.json())

app.use("/api", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
