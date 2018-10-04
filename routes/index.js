// Dependencies ---------------------------------
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes -----------------------------------
router.use("/api", apiRoutes);

// React App Route ------------------------------
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Export ---------------------------------------
module.exports = router;
