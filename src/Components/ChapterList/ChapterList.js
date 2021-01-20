import React from 'react';
import SubChapterList from '../SubChapterList';


const ChapterList = ({ isLoading, chapters, addChapter, undo, redo } ) => {

  if(isLoading) {
    return <div>Загрузка...</div>
  }

  return (
  <div className="chapter-list">
    {
      chapters.map(
        (chapter) => (
          <label key={chapter.id}>
            <input type="checkbox" checked={chapter.completed} onChange={()=>(true)} />
            <span className="chapter-title">{chapter.title}</span>
            <SubChapterList chapterId={chapter.id} />
          </label>
        )
      )
    }
    <form
      onSubmit={
        (e) => {
          e.preventDefault();
          if(!e.target.title.value.trim()) {
            return
          }

          addChapter(e.target.title.value);
          e.target.title.value = '';
        }
      }
    >
      <div className="chapter-add">
        <input id="chapter" type="text" name="title" />
        <button>Добавить Главу</button>
      </div>
    </form>
    <div className="control-block">
        <button 
          className="undo-button"
          onClick={() => {undo()}}
        >
          Undo
        </button>
        <button 
          className="undo-button"
          onClick={() => {redo()}}
        >
          Redo
        </button>
      </div>
  </div>
)};

export default ChapterList;