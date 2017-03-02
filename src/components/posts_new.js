import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    const {fields:{title,category,content}, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...category}/>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// Connnect: first arguement is mapStateToProps, Second is mapDispatchToProps.

//reduxForm: 1st is  form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps.

export default reduxForm({
  form: 'PostNew',
  fields:['title', 'category', 'content']
}, null, { createPost })(PostsNew);

/// Whenever a user types something in.... record it on app state.
