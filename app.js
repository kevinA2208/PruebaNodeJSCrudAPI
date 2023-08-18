const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const server = require("http").Server(app);


app.use(cors());
app.use(express.json());
app.use("/pruebacrud", require("./routes/crudRoute"));


server.listen(port, () => {
  console.log("Server started!");
});