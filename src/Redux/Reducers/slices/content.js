import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { 
  isLoading: false,
  isError: false,
  error: null,
  entries: null
};


const updateChapter = (state, action) => {
  const chapter = state.entries.chapters.find(chapter => chapter.id === action.payload.chapterId);

  chapter.completed = state.entries.subChapters
    .filter((element) => (element.chapterId === action.payload.chapterId))
    .every((subChapter) => (subChapter.completed));
}

export const fetchContent = createAsyncThunk(
  'content/fetchAll',
  async () => {
    const response = await axios({
      url: 'https://content-ec98.restdb.io/rest/content',
      method: 'GET',
      headers: {
        'x-apikey': '60012c8e1346a1524ff12a60'
      }
    })

    return response.data[0].content;
  }
)

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers:
  {
    addChapter(state, action){
      state.entries.chapters.push(
        {
          id: Date.now(),
          title: action.payload, 
          completed: false
        }
      )
    },
    addSubChapter(state, action){
      state.entries.subChapters.push(
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

      const subChapter = state.entries.subChapters.find(subChapter => subChapter.id === action.payload.id)
      if (subChapter) {
        subChapter.completed = !subChapter.completed
      }
      
      updateChapter(state, action);
    }
  },
  extraReducers: {
    [fetchContent.pending]: (state, action) => {

      return {
        ...state,
        isLoading: true
      }
    },
    [fetchContent.fulfilled]: (state, action) => {

      return {
        ...initialState,
        entries: action.payload
      }
    }
  }
});

export const { addChapter, addSubChapter, toggleSubChapter } = contentSlice.actions;
export default contentSlice.reducer;