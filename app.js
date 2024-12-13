const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "pages", "index.html"))
);

app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "pages", "about.html"))
);

app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "pages", "contact-me.html"))
);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
