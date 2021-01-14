import { combineReducers } from 'redux';

import filters from './slices/filters';
import content from './slices/content'; 

export default combineReducers(
  {
    content,
    filters
  }
);