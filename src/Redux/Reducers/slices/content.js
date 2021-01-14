import { createSlice } from '@reduxjs/toolkit';

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


const updateChapter = (state, action) => {
  const chapter = state.chapters.find(chapter => chapter.id === action.payload.chapterId);

  chapter.completed = state.subChapters
    .filter((element) => (element.chapterId === action.payload.chapterId))
    .every((subChapter) => (subChapter.completed));
}

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers:
  {
    addChapter(state, action){
      state.chapters.push(
        {
          id: Date.now(),
          title: action.payload, 
          completed: false
        }
      )
    },
    addSubChapter(state, action){
      state.subChapters.push(
        {
          id: Date.now(),
          chapterId: action.payload.chapterId,
          title: action.payload.title,
          completed: false
        }
      )

      updateChapter(state, action);
    },
    toggleSubChapter(state, action){

      const subChapter = state.subChapters.find(subChapter => subChapter.id === action.payload.id)
      if (subChapter) {
        subChapter.completed = !subChapter.completed
      }
      
      updateChapter(state, action);
    }
  }
});

export const { addChapter, addSubChapter, toggleSubChapter } = contentSlice.actions;
export default contentSlice.reducer;