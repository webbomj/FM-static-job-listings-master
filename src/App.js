import Filter from './components/Filter';
import JobList from './components/JobList';
import header from "./images/bg-header-desktop.svg"
import dataJson from "./data.json"
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let initFilter = {
    'role': '',
    'level': '',
    'languages': []
  }

  const [filter, setFilter] = useState(initFilter)
  const [data, setData] = useState(dataJson)
  const [isFiltered, setIsFiltered] = useState(false)
  const [tags, setTags] = useState([])

  const createTags = (el) => {
    if (tags.includes(el)) {return}
    let tagsArray = [...tags, el]
    setTags(tagsArray)
  }

  const deleteTag = (el) => {
    setData(dataJson)
    let tagsArray = tags.filter(tag => tag !== el)
    setTags(tagsArray)
    if (tagsArray.length === 0) {
      clearFilter()
    }
    if (el === filter.role) {
      setFilter(prev => ({...prev, 'role': ''}))
    }
    if (el === filter.level) {
      setFilter(prev => ({...prev, 'level': ''}))
    }
    setFilter( prev => ({...prev, 'languages': prev.languages.filter(lang => lang !== el)}))
  }

  const clearFilter = () => {
    setIsFiltered(false)
    setData(dataJson)
    setFilter(initFilter)
    setTags([])
  }

  const filterData = () => {
    let filteredData = data
    
    if (filter.role) {
      createTags(filter.role)
      filteredData = filteredData.filter(el => el.role === filter.role)
    }
    if (filter.level) {
      createTags(filter.level)
      filteredData = filteredData.filter(el => el.level === filter.level)
    }
    if (filter.languages.length !== 0) {
      for (let index = 0; index < filter.languages.length; index++) {
        const element = filter.languages[index];
        createTags(element)
        filteredData = filteredData.filter(el => el.languages.includes(element))
      }
    }
    return filteredData
  }

  useEffect(() => {
    const filteredData = filterData()
    setData(filteredData)
  },[filter])
  
  return (
    <div className="App">
     <img src={header} alt="bg-desktop" className='App-bg'/>
     <Filter isFiltered={isFiltered} clearFilter={clearFilter} tags={tags} deleteTag={deleteTag}/>
     <JobList data={data} filter={filter} setFilter={setFilter} setIsFiltered={setIsFiltered}/>
    </div>
  );
}

export default App;
