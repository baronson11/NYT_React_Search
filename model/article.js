// Dependencies -----------------------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema -----------------------------------------
const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String },
  synopsis: String,
  date: { type: Date, default: Date.now },
  url: { type: String }
});

// Article ----------------------------------------
const Article = mongoose.model("Article", articleSchema);

// Export -----------------------------------------
module.exports = Article;
