import React from 'react';

const Filter = ( { setFilter, filters }) => {
  
  return (
    <div className="filters">
      <button className={`filter-button ${filters === 'SHOW_ALL' ? 'filter-button-selected' : ''}`} onClick={() => { setFilter('SHOW_ALL') } }>Показать все</button>
      <button className={`filter-button ${filters === 'SHOW_COMPLETED' ? 'filter-button-selected' : ''}`} onClick={() => { setFilter('SHOW_COMPLETED') } }>Показать готовые</button>
      <button className={`filter-button ${filters === 'SHOW_UNCOMPLETED' ? 'filter-button-selected' : ''}`} onClick={() => { setFilter('SHOW_UNCOMPLETED') } }>Показать не готовые</button>
    </div>
  )
}

export default Filter;