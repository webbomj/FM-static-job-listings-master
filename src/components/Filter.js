import React from 'react';
import '../css/Filter.css';
import FilterItem from './FilterItem';

const Filter = ({isFiltered, clearFilter, tags, deleteTag}) => {


  return (
    <div className={isFiltered ? 'filter' : `filter filter-hidden`}>
      <div className='filter__tags'>
        {tags?.map(el => 
          <FilterItem key={el} data={el} deleteTag={deleteTag}/>
        )}
      </div>
      <button className='filter__clear' onClick={clearFilter}>Clear</button>
    </div>
  );
};

export default Filter;