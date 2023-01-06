const dotenv = require("dotenv").config({ path: __dirname + "/config/.env" });

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.static("public"));

// serves index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// generate a random choice for the computer
const randomRpsGenerator = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

// responds with rock, paper, or scissors
app.get("/computerChoice", (req, res) => {
  const computerChoices = randomRpsGenerator();
  res.json(computerChoice);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
