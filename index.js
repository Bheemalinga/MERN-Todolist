const express = require("express");

const app = express();

const port = process.env.PORT || 7000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
});

app.use((req, res, next) => {
  res.send("Hello World");
});

app.listen(port, () => {
  if (port == 7000) {
    console.log(`Server is running on http://localhost:${port}`);
  }
});
