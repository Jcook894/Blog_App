import React, { Component } from 'react';


class PostsIndex extends Component {
  componentWillMount(){
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

export default PostsIndex;
