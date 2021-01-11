const initialState = 'SHOW_ALL';

export const filters = function(state = initialState, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
}