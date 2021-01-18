import { connect } from 'react-redux';

import Filter from './Filter';
import { setFilter } from '../../Redux/Reducers/slices/filters'

const mapDispatchToProps = (dispatch) => (
  {
    setFilter: (payload) => dispatch(setFilter(payload))
});

const mapStateToProps = (state) => {
  return { filters: state.filters }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);