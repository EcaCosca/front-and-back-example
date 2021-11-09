const express = require("express");
const cors = require("cors");
const { users } = require("./users.js");
const app = express();
const PORT = 3001;

let currentId = users.length;

app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());

app.get("/users", (req, res) => {
  console.log(users);
  res.json(users);
});

app.post("/users", (req, res) => {
  const user = req.body;
  user.id = ++currentId;
  users.push(user);
  res.json(user);
});

app.listen(PORT, () => {
  console.log("connected on= http://localhost:3001/users");
});
