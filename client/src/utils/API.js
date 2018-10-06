import axios from "axios";

export default {
  // Fetch NYT articles from API on backend
  searchArticles: (articleData) => {
    return axios.post("/api/articles/search", articleData);
  },
  // Gets all articles
  getArticles: () => {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: (id) => {
    return axios.get(`/api/articles/${id}`);
  },
  // Deletes the article with the given id
  deleteArticle: (id) => {
    return axios.delete(`/api/articles/${id}`);
  },
  // Saves an article to the database
  saveArticle: (articleData) => {
    return axios.post("/api/articles", articleData);
  }
};
