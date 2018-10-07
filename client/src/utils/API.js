import axios from "axios";

const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?`;
const key = `2e0b1078b6234bc2b219ee5e793572d6`;

export default {
  // Fetch NYT articles from API on backend
  searchArticles: (query, beginDate, endDate) => {
    if(beginDate && endDate) {
      return axios.get(`${url}?q=${query}&end_date=${endDate}&begin_date=${beginDate}&api-key=${key}`);
    } else if (beginDate) {
      return axios.get(`${url}?q=${query}&begin_date=${beginDate}&api-key=${key}`);
    } else if (endDate) {
      return axios.get(`${url}?q=${query}&end_date=${endDate}&api-key=${key}`);
    } else {
      return axios.get(`${url}?q=${query}&api-key=${key}`);
    }
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
