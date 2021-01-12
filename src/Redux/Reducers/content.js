const initialState = {
  chapters: [
    {
      id:  1,
      title: 'Глава 1',
      completed: false
    },
    {
      id:  2,
      title: 'Глава 2',
      completed: false
    },
    {
      id:  3,
      title: 'Глава 3',
      completed: true
    }
  ],
  subChapters: [
    {
      id:  1,
      chapterId: 1,
      title: 'подглава 1',
      completed: false,
      
    },
    {
      id:  2,
      chapterId: 1,
      title: 'подглава 2',
      completed: false
    },
    {
      id:  3,
      chapterId: 2,
      title: 'интересная подглава 2',
      completed: false
    },
    {
      id:  4,
      chapterId: 3,
      title: 'подглава 1',
      completed: true,
    }
  ]
};

function updateChapter(state, prevState, action) {

  let chapterComplete = state.subChapters
  .filter((element) => (element.chapterId === action.chapterId))
  .every((subChapter) => (subChapter.completed));

  return {...state, chapters: prevState.chapters.map(
      (chapter) => (
        chapter.id === action.chapterId
          ? { ...chapter, completed: chapterComplete }
          : chapter
      )
    )
  }

}

export const content = function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_CHAPTER':
      return {...state, chapters: state.chapters.concat(
          {
            id: Date.now(),
            title: action.title, 
            completed: false
          }
        )
      };
    case 'ADD_SUBCHAPTER':
      const newState = {...state, subChapters: state.subChapters.concat(
          {
            id: Date.now(),
            chapterId: action.chapterId,
            title: action.title,
            completed: false
          }
        )
      };

      return updateChapter(newState, state, action);

    case 'TOGGLE_SUBCHAPTER':
      const toggleState = {...state, subChapters: state.subChapters.map(
          (subChapter) => (
            subChapter.id === action.id
              ? { ...subChapter, completed: !subChapter.completed }
              : subChapter
          )
        )
      };

      return updateChapter(toggleState, state, action);
    default:
      return state;
  }
}