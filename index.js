const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/api");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;

// Connecting to Database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

// This snippet of code is used to handle Cross origin Resource Sharing(CORS) error
//
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// });
//

// app.use((req, res, next) => {
//   res.send("Hello World !");
// });

app.use(bodyParser.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  if (port == 3000) {
    console.log(`Server is running on "http://localhost:${port}"`);
  }
});
