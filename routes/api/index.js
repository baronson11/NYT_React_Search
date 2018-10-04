// Dependencies -------------------------------
const router = require("express").Router();
const articleRoutes = require("./articles");

// Routes -------------------------------------
router.use("/articles", articleRoutes);

// Export -------------------------------------
module.exports = router;
