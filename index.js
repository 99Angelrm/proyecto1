const express = require("express");
const path = require("path");
//config
const app = express();

//Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//database

//API endpoint
app.get("/spiderman", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
});

//Listeners
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
