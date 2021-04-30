const express = require("express");
const bodyParser = require("body-parser");
const pgp = require("pg-promise")();
const db = pgp("postgres://azhfhwpn:5VPylMsT0XOBlEO8RxxKXAOjumxSDY6u@queenie.db.elephantsql.com:5432/azhfhwpn");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded());

app.get('/classes', async(req, res) => {
  const classes = await db.any("SELECT * from classes").then((classes) => {
    return classes;
  })
  res.send(classes);
})











app.listen(PORT, () => {
  console.log(`LikeyPix API is running on port ${PORT}`);
});
