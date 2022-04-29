import React from 'react';
import "../css/FilterItem.css"
import remove from '../images/icon-remove.svg'


const FilterItem = ({data, deleteTag}) => {
  return (
    <div className='filterItem' onClick={() => deleteTag(data)}>
      <span className='filterItem__text'>{data}</span>
      <div className='filterItem__button'>
        <img className='filterItem__button-img' src={remove} />
      </div>
    </div>
  );
};

export default FilterItem;