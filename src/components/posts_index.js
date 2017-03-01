import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
    console.log("Call an action creator!!!");
  }
  render() {
    return (
      <div>
        List of blog posts.
      </div>
    );
  }
}

export default connect(null, ({ fetchPosts }))(PostsIndex);
