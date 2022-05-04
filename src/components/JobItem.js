import React from 'react';
import Icon from './Icon';
import '../css/JobItem.css'

const JobItem = ({data, filter, setFilter, setIsFiltered}) => {

  const filterRole = (e) => {
    let role = e.target.textContent
    setFilter(prev => ({
      ...prev, "role": role
    }))
    setIsFiltered(true)
  }

  const filterLevel = (e) => {
    let level = e.target.textContent
    setFilter(prev => ({
      ...prev, "level": level
    }))
    setIsFiltered(true)
  }

  const filterLanguages = (e) => {
    let language = e.target.textContent
    if (filter.languages.includes(language)) {
      return
    }
    setFilter(prev => ({
      ...prev, "languages": [...prev.languages, language]
    }))
    setIsFiltered(true)
  }

  return (
    <div className='JobItem'>
      {data.featured ? <div className='JobItem__line'></div> : null }
      <div className='JobItem__leftBlock'>
        <Icon name={data.logo.split('/')[2].split('.')[0]} style='JobItem__img'/>
        <div className='JobItem__info'>
          <div className='JobItem__info-firstLine'>
            <span className='JobItem__companyName'>{data.company}</span>{data.new ? <span className='JobItem__flag--new'>NEW!</span> : null}{data.featured ? <span className='JobItem__flag--featured'>FEATURED!</span> : null}
          </div>
          <h2 className='JobItem__vacancy'>{data.position}</h2>
          <span className='JobItem__params'>{`${data.postedAt} ・ ${data.contract} ・ ${data.location}`}</span>
        </div>
      </div>
      <div className='JobItem__hr'></div>
      <div className='JobItem__tags'>
        <span className='JobItem__tag' onClick={(e) => filterRole(e)}>{data.role}</span>
        <span className='JobItem__tag' onClick={(e) => filterLevel(e)}>{data.level}</span>
        {data.languages.map(el => 
          <span key={el} className='JobItem__tag' onClick={(e) => filterLanguages(e)}>{el}</span>
         )}
        
      </div>
    </div>
  );
};

export default JobItem;