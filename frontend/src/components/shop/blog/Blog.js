import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Content from './Content';
import Bookmark from './Bookmark';
import NewStory from './NewStory';
import SinglePost from './SinglePost';
import Footer from './Footer';

import './style.css';
import data from './data';

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: data
    }

    this.handleBookmark = this.handleBookmark.bind(this);
    this.handleRemoveBookmark = this.handleRemoveBookmark.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleBookmark(data) {
    let posts = this.state.posts;
    posts = posts.map(post => post === data ? {id: post.id, title: post.title, img: post.image, body: post.body, bookmark: true} : post);
    this.setState({posts});
  }

  handleRemoveBookmark(data) {
    let posts = this.state.posts;
    posts = posts.map(post => post === data ? {id: post.id, title: post.title, img: post.image, body: post.body, bookmark: false} : post);
    this.setState({posts});
  }

  handleSubmission(data) {
    let posts = this.state.posts;
    posts = [data, ...posts];
    this.setState({posts});
  }

  handleRemove(post, history) {
    let posts = this.state.posts;
    posts = posts.filter(onepost => onepost !== post);
    this.setState({posts});
    history.push('/');
    this.handleWindow();
  }

  handleWindow() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Router basename="/blog">
        <div className="App">
          <Route path="*" render={(props) => <Header {...props} />} />
          <Route exact path="/" render={() => <Content posts={this.state.posts} bookmarks={this.state.posts.filter(post => post.bookmark)} handleBookmark={this.handleBookmark} handleRemoveBookmark={this.handleRemoveBookmark} />} />
          <Route exact path="/new" render={() => <NewStory handleSubmission={this.handleSubmission} />} />
          <Route exact path="/bookmark" render={() => <Bookmark bookmarks={this.state.posts.filter(post => post.bookmark)} />} />
          <Route exact path="/post/:id" render={(props) => <SinglePost {...props} posts={this.state.posts} handleBookmark={this.handleBookmark} handleRemoveBookmark={this.handleRemoveBookmark} handleRemove={this.handleRemove} handleWindow={this.handleWindow()} />} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default Blog;