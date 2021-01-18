import { connect } from 'react-redux';

import Statistics from './Statistics';

const mapStateToProps = (state) => {
  if(state.content.present.isLoading) return state;
  const allChapters = state.content.present.entries.chapters.length + state.content.present.entries.subChapters.length
  const completeChapters = state.content.present.entries.chapters.filter(el => el.completed).length + state.content.present.entries.subChapters.filter(el => el.completed).length
  const percent = Math.floor((completeChapters / allChapters) * 100)
  return {
    allChapters,
    percent
  };
};

export default connect(mapStateToProps)(Statistics)