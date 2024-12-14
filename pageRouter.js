const { Router } = require("express");
const pageRouter = Router();
const path = require("path");
const fs = require("fs");

pageRouter.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "pages", "index.html"))
);

pageRouter.get("/:page", (req, res, next) => {
  const { page } = req.params;
  const pagePath = path.join(__dirname, "pages", `${page}.html`);
  fs.access(pagePath, fs.constants.F_OK, (err) => {
    if (err) {
      return next();
    }
    res.sendFile(pagePath);
  });
});

module.exports = pageRouter;
