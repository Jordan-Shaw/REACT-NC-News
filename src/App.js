import React, { Component } from 'react'
import './App.css';
import { Router } from '@reach/router';
import Header from "./components/general/Header"
import Homepage from "./components/general/Homepage"
import SingleArticle from "./components/articles/SingleArticle"
import ArticlePage from "./components/articles/ArticlePage"
import TopicsPage from "./components/topics/TopicsPage"
import { bubble as Menu } from 'react-burger-menu'
import { Link } from '@reach/router'
import ErrorPage from './components/general/ErrorPage';
import UserPage from './components/general/UserPage';


export default class App extends Component {
  state = {
    username: 'tickle122'
  }
  render() {
    const { username } = this.state

    return (
      <div className="outer-container">
        <Menu pageWrapId={"page-wrap"}>
          <Link to="/" className="navItem">Home</Link>
          <Link to="/articles" className="navItem">Articles</Link>
          <Link to={`/users/${username}`} className="navItem">Profile</Link>
        </Menu>
        <Header />
        <div id="page-wrap">
          <Router className="pageBody">
            <Homepage path="/" username={username}/>
            <ArticlePage path="/articles" username={username} />
            <TopicsPage path="/articles/topics/:topic" />
            <SingleArticle path="/articles/:article_id" username={username} />
            <UserPage path="/users/:username" />
            <ErrorPage default />
          </Router>
        </div>
      </div>
    )
  }
}

