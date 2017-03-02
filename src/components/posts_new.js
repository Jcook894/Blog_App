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
          <div className="text-help">
            {title.touched ? title.error : ""}
          </div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...category}/>
          <div className="text-help">
            {category.touched ? category.error : ""}
          </div>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ""}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// Validation on the form inputs.
function validate(value){
  const error = {};

    if(!value.title){
      error.title = 'Enter a blog title!';

    }

    if(!value.category){
      error.category = 'Enter a category!';
    }

    if(!value.content){
      error.content = 'Type in some content!';
    }
  return error;
}

// Connnect: first arguement is mapStateToProps, Second is mapDispatchToProps.

//reduxForm: 1st is  form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps.

export default reduxForm({
  form: 'PostNew',
  fields:['title', 'category', 'content'],
  validate
}, null, { createPost })(PostsNew);

/// Whenever a user types something in.... record it on app state.
