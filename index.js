const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const cakeRouter = require("./routes/index.js");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", cakeRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
