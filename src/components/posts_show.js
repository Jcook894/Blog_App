import React, { Component } from "react" ;
import { connect }  from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }
  render() {
    const { post } = this.props;
    if(!post){
      return <div>Loading.....</div>
    }
    console.log(this.props.post);
      return(

        <div>
          <h3>{post.title}</h3>
          <h6>{post.category}</h6>
          <p>{post.content}</p>
        </div>
      );
  }

}

function mapStateToProps(state) {
  return { post: state.post.post };
}

export default connect(mapStateToProps,{ fetchPost })(PostsShow);
