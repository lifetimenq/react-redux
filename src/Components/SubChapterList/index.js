import { connect } from 'react-redux';

import SubChapterList from './SubChapterList';
import { addSubChapter, toggleSubChapter} from '../../Redux/Reducers/slices/content';

const filters = {
  SHOW_ALL: () => true,
  SHOW_COMPLETED: (chapter) => chapter.completed,
  SHOW_UNCOMPLETED: (chapter) => !chapter.completed
};

const mapStateToProps = (state) => {
  return {
    subChapters: state.content.present.entries.subChapters.filter(filters[state.filters])
  };
  return {
    ...state,
    content: {
      chapters: state.content.present.entries.chapters.filter(filters[state.filters]),
      subChapters: state.content.present.entries.subChapters.filter(filters[state.filters])
    }
  }; 
};

const mapDispatchToProps = (dispatch) => ({
  addSubChapter: (payload) => dispatch(addSubChapter(payload)),
  toggleSubChapter: (payload) => dispatch(toggleSubChapter(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubChapterList);