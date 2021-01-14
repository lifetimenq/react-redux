import { connect } from 'react-redux';

import SubChapterList from './SubChapterList';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (chapter) => chapter.completed,
  SHOW_UNCOMPLETED: (chapter) => !chapter.completed
};

const mapStateToProps = (state) => {
  return {
    ...state,
    content: {
      chapters: state.content.chapters.filter(filters[state.filters]),
      subChapters: state.content.subChapters.filter(filters[state.filters])
    }
  }; 
};

const mapDispatchToProps = (dispatch) => ({
  addSubchapter: (chapterId, title) => dispatch({
    type: 'ADD_SUBCHAPTER',
    title,
    chapterId
  }),
  toggleSubChapter: (id, chapterId) => dispatch({
    type: 'TOGGLE_SUBCHAPTER',
    id,
    chapterId
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(SubChapterList);