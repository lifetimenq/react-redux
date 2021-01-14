import { combineReducers } from 'redux';

import { filters } from './filters';
import { content } from './content'; 

export default combineReducers(
  {
    content,
    filters
  }
);