import { connect } from 'react-redux';

import Filter from './Filter';

const mapDispatchToProps = (dispatch) => (
  {
    setFilter: (filter) => dispatch({
    type: 'SET_FILTER',
    filter
    })
});

const mapStateToProps = (state) => {
  return { filters: state.filters }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);