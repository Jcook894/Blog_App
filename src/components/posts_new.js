import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link }  from 'react-router';


class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then( () => {
        //blog post has been created, navigate user to the index.
        //Navigate by calling this.context.router.push
        //with the new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const {fields:{title, categories, content}, handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3 className="headers">Create a New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? "has-danger" : ''}`}>
          <label className="sub-headers">Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ""}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? "has-danger" : ''}`}>
          <label className="sub-headers">Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ""}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? "has-danger" : ''}`}>
          <label className="sub-headers">Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ""}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
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

    if(!value.categories){
      error.categories = 'Enter a categories!';
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
  fields:['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

/// Whenever a user types something in.... record it on app state.
