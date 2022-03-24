const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content-type to application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// create cors
app.use(cors());

// parse request data content-type to application/json
app.use(bodyParser.json());

// create root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// import employees route
const employeeRoutes = require("./src/routes/employee.route");

app.use("/api/v1/employees", employeeRoutes);

// listen to the port
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
