// Dependencies --------------------------------------
const router = require("express").Router();
const articleController = require("../../controller/articleController");

// Matches routes with "/api/articles" ---------------
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches routes with "/api/articles/:id" -----------
router.route("/:id")
  .get(articleController.findById)
  .delete(articleController.remove);

// Export --------------------------------------------
module.exports = router;


// Built by LucyBot. www.lucybot.com
// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "2e0b1078b6234bc2b219ee5e793572d6",
//     'q': "kavanaugh"
//   },
// }, (err, response, body) {
//   let results = JSON.parse(body);
//   console.log(results);
// })
