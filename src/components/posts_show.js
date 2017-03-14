import React, { Component } from "react" ;
import { connect }  from 'react-redux';
import { fetchPost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }
  render() {
    if(!this.props.post){
      return <div>Loading.....</div>
    }
    console.log(this.props.post);
      return(

        <div>
          Show post {this.props.params.id}
        </div>
      );
  }

}

function mapStateToProps(state) {
  return { post: state.post.post };
}

export default connect(mapStateToProps,{ fetchPost })(PostsShow);
