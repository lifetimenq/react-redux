import { connect } from 'react-redux';

import Statistics from './Statistics';

const mapStateToProps = (state) => {
  return state.content;
};

export default connect(mapStateToProps)(Statistics)