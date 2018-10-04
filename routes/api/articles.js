// Dependencies --------------------------------------
const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches routes with "/api/articles" ---------------
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches routes with "/api/articles/:id" -----------
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

// Export --------------------------------------------
module.exports = router;
