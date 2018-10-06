import API from "../../utils/API";
import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn"
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input,FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    articles: [],
    savedArticles: [],
    title: "",
    number: "",
    beginDate: "",
    endDate: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles().then(articles => {
      this.setState({savedArticles: articles.data});
    })
  }

  handleInputs = (e) => {
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }

  getSearch = (e) => {
    e.preventDefault();
    const {title, number, beginDate, endDate} = this.state;
    API.searchArticles(title, number, beginDate, endDate).then(data => {
      this.setState({
        articles: data.data.response.docs
      });
    });

  }

  saveArticle(title, date, url) {
    API.saveArticle({
      title,
      date,
      url
    })
    .then(data => {
      this.loadArticles();
    })
    .catch(err => console.log(err));
  }

  deleteArticle = (id) => {
    API.deleteArticle(id).then(data => {
      this.loadArticles();
    });
  }
  render() {
    return (
      <Container fluid>
        <Jumbotron>New York Times Archives</Jumbotron>
        <Container>
          <form>
            <Input name="title" value={this.state.title} onChange={this.handleInputs} label="Title Search" placeholder="Title" />
            <Input name="beginDate" value={this.state.beginDate} onChange={this.handleInputs} label="Start Year (Optional)" placeholder="YYYYMMDD" />
            <Input name="endDate" value={this.state.endDate} onChange={this.handleInputs} label="End Year (Optional)" placeholder="YYYYMMDD" />
            <FormBtn onClick={this.getSearch}> Get New Articles </FormBtn>
          </form>
        </Container>
        <Container >
          <h3>Search Results: </h3>
        {this.state.articles.length ? (
              <List>
                {this.state.articles.map((article, i) => (
                  <ListItem key={article._id} id={article._id} date={article.pub_date}>
                    <a href={article.web_url}>{article.headline.main}</a>
                    <SaveBtn onClick={() => this.saveArticle(article.headline.main, article.pub_date, article.web_url)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Search Results to Display</h3>
            )}
        </Container>
        <Container >
          <h3>Saved Articles: </h3>
          { this.state.savedArticles.length ? (
          <List>
             {this.state.savedArticles.map((article, i) => (
              <ListItem key={article._id} id={article._id}>
                <a href={article.url}>{article.title}</a>
                <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
              </ListItem>
            ))}
          </List>
          ): ( <h3> No Saved Articles</h3> )}
        </Container>
      </Container>

    );
  }
}

export default Home;
