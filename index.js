// Import necessary modules

require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser");
const port = process.env.PORT;

// Define a route for the root URL

app.get("/", (req, res) => {
  res.status(201).json("Password Reset Flow");
});

// Middleware setup

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);

// Start the server and listen on the specified port

app.listen(port, () => {
  console.log(`Server started at: ${port}`);
});
