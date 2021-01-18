import React from 'react';
import store from './Redux/store';
import './App.css';
import { Provider } from 'react-redux'

import ChapterList from './Components/ChapterList';
import Filter from './Components/Filter';
import Statistics from './Components/Statistics';
import { fetchContent } from './Redux/Reducers/slices/content';

store.dispatch(fetchContent());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="content">
          <div className='book-content'>
            Содержание книги
          </div>
          <Filter />
          <ChapterList />
          <Statistics />
        </div>
      </div>
    </Provider>
  );
}

export default App;

