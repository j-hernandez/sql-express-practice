const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://qomyoved:ZhyvOedvW_8knyyEzPqIhqORWtuxZ_ER@drona.db.elephantsql.com:5432/qomyoved");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());



app.listen(PORT, () => {
  console.log(`LikeyPix API is running on port ${PORT}`);
});
