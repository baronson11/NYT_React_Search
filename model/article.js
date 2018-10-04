// Dependencies -----------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema -----------------------------------------
const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

// Article ----------------------------------------
const Article = mongoose.model("Article", articleSchema);

// Export -----------------------------------------
module.exports = Article;
