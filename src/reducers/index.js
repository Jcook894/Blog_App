import { combineReducers } from 'redux';
import PostReducers from './reducer_posts';

const rootReducer = combineReducers({
  post: PostReducers
});

export default rootReducer;
