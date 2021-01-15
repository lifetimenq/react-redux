import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo'

import ChapterList from './ChapterList';

import { addChapter } from '../../Redux/Reducers/slices/content'

const filtersSubChapter = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (chapter) => chapter.completed,
  SHOW_UNCOMPLETED: (chapter) => !chapter.completed
};

const mapStateToProps = (state) => {

  if (state.content.present.isLoading) return state;
  
  let chs = state.content.present.entries.chapters.filter((ch) => {
    if (state.filters === 'SHOW_ALL')
      return true
    if (state.filters === 'SHOW_UNCOMPLETED')
      return !ch.completed
    if (state.filters === 'SHOW_COMPLETED') {
      if(ch.completed)
        return true
      return state.content.present.entries.subChapters.some((sch) => {
        if (ch.id === sch.chapterId) {
          return sch.completed;
        }
      })
    }
  })

  return {
    ...state,
    content: {
      ...state.content,
      present: {
        ...state.content.present,
        entries: {
          chapters: chs,
          subChapters: state.content.present.entries.subChapters.filter(filtersSubChapter[state.filters])
        }
      }
    }
  };

};

const mapDispatchToProps = (dispatch) => ({
  addChapter: (title) => dispatch(addChapter(title)),
  undo: () => dispatch(ActionCreators.undo()),
  redo: () => dispatch(ActionCreators.redo())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterList);