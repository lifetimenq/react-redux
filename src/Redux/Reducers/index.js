import { combineReducers } from 'redux';

import filters from './slices/filters';
import content from './slices/content'; 

import undoable from 'redux-undo';

export default combineReducers(
  {
    content: undoable(content),
    filters
  }
);