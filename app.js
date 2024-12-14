const express = require("express");
const app = express();
const path = require("path");
const pageRouter = require("./pageRouter");

app.use("/", pageRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
