import React from 'react';
import classNames from 'classnames';
import styles from '../../App.css';

let cx = classNames.bind(styles);

const Filter = ( { setFilter, filters }) => {
  const selected = 'filter-button-selected';
  return (
    <div className="filters">
      <button className={cx('filter-button', {[selected]: filters === 'SHOW_ALL'})} onClick={() => { setFilter('SHOW_ALL') } }>Показать все</button>
      <button className={cx('filter-button', {[selected]: filters === 'SHOW_COMPLETED'})} onClick={() => { setFilter('SHOW_COMPLETED') } }>Показать готовые</button>
      <button className={cx('filter-button', {[selected]: filters === 'SHOW_UNCOMPLETED'})} onClick={() => { setFilter('SHOW_UNCOMPLETED') } }>Показать не готовые</button>
    </div>
  )
}

export default Filter;