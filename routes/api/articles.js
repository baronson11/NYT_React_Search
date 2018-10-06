// Dependencies --------------------------------------
const router = require("express").Router();
const articleController = require("../../controller/articleController");

// Require API keys
const keys = require("../../config/keys.js");

// Require New York Times with custom API key
const nyt = require('newyorktimes')(keys.nytapi);
const QUERYURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`

// Matches routes with "/api/articles" ---------------
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches routes with "/api/articles/search" --------
router.route("/search")
  .post((req, res) => {
    nyt.query(`${QUERYURL}q=${req.body.query}`, (err, json) => {
      console.log(json);
      return json;
    });
  });

// Matches routes with "/api/articles/:id" -----------
router.route("/:id")
  .get(articleController.findById)
  .delete(articleController.remove);

// Export --------------------------------------------
module.exports = router;
