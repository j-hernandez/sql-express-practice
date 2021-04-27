const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://hyeeumfv:1YwH3PINc4cZLU1YqnL2Lix1AtNwci7s@queenie.db.elephantsql.com:5432/hyeeumfv");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());



app.listen(PORT, () => {
  console.log(`LikeyPix API is running on port ${PORT}`);
});
