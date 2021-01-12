import { connect } from 'react-redux';

import Statistics from './Statistics';

const mapStateToProps = (state) => {
  const allChapters = state.content.chapters.length + state.content.subChapters.length
  const completeChapters = state.content.chapters.filter(el => el.completed).length + state.content.subChapters.filter(el => el.completed).length
  const percent = Math.floor((completeChapters / allChapters) * 100)
  return {
    allChapters,
    percent
  };
};

export default connect(mapStateToProps)(Statistics)