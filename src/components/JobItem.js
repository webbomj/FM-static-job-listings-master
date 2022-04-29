import React from 'react';
import '../css/JobItem.css'
import photosnap from '../images/photosnap.svg'
import manage from '../images/manage.svg'
import account from '../images/account.svg'
import myhome from '../images/myhome.svg'
import loopStudios from '../images/loop-studios.svg'
import faceit from '../images/faceit.svg'
import shortly from '../images/shortly.svg'
import insure from '../images/insure.svg'
import eyecamCo from '../images/eyecam-co.svg'
import TAFC from '../images/the-air-filter-company.svg'


const JobItem = ({data, filter, setFilter, setIsFiltered}) => {
  
  let imgSrc = null
  switch (data.company) {
    case "Photosnap":
      imgSrc = photosnap
      break;
    case "Manage":
      imgSrc = manage
      break;
    case "Account":
      imgSrc = account
      break;
    case "MyHome":
      imgSrc = myhome
      break;
    case "Loop Studios":
      imgSrc = loopStudios
      break;
    case "FaceIt":
      imgSrc = faceit
      break;
    case "Shortly":
      imgSrc = shortly
      break;
    case "Insure":
      imgSrc = insure
      break;
    case "Eyecam Co.":
      imgSrc = eyecamCo
      break;
    case "The Air Filter Company":
      imgSrc = TAFC
      break;
    default: imgSrc = ''
      break;
  }

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
        <img className='JobItem__img' src={imgSrc} alt='img'/>
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