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

app.get('/classes/teachers/:id', async(req, res) => {
  const id = req.params.id;
  const classes = await db.any("SELECT * from classes" + "JOIN class_teacher ON classes.id = class_teacher.class_id" + "WHERE class_teacher.teacher_id = 1;", [id]).then((classes) => {
    return classes;
  })
  res.send(classes);
})


app.get('/students', async(req, res) => {
  const students = await db.any("SELECT * from students").then((students) => {
    return students;
  })
  res.send(students);
})

app.get('/students/classes/:id', async(req, res) => {
  const id = req.params.id;
  const students = await db.any("SELECT * from students WHERE class_id = $1", [id]).then((students) => {
    return students;
  })
  res.send(students);
})


app.get('/teachers', async(req, res) => {
  const teachers = await db.any("SELECT * from teachers").then((teachers) => {
    return teachers;
  })
  res.send(teachers);
})





app.listen(PORT, () => {
  console.log(`LikeyPix API is running on port ${PORT}`);
});
