const express = require("express");
const cds = require("@sap/cds");
const cors = require("cors"); // Add this line

cds.on("bootstrap", (app) => {
  app.use(cors()); // Add this line to enable CORS for all routes
  app.use("/pdfs", express.static("pdfs"));
});
