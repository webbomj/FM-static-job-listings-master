import React from 'react';
import '../css/JobList.css';
import JobItem from './JobItem';

const JobList = ({data, filter, setFilter, setIsFiltered}) => {
  return (
    <div className='JobList'>
      
      {data.map(el => 
        <JobItem key={el.id} data={el} filter={filter} setFilter={setFilter} setIsFiltered={setIsFiltered}/>
      )}
      
    </div>
  );
};

export default JobList;