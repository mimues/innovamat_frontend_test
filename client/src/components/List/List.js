import React, { useEffect, useState, useContext } from 'react'
import AppContext from 'context/AppContext';
import { normalizeText } from 'utils/utils';
import ListItem from 'components/ListItem/ListItem'
import './List.css'
import 'components/ListItem/ListItem.css'

const List = ({ section }) => {
  const { resources, sectionName } = section
  //Filter duplicate resources inside each section
  let filteredResources = resources.filter((resource, index, resources) => (
    resources.findIndex(elem => (elem.id === resource.id)) === index
  ))
  const [copyResources, setCopyResources] = useState([...filteredResources])
  const { search, click, resetSearchbar } = useContext(AppContext)
  
  //Filter if searchbar input
  useEffect(() => {
    let copy = [...copyResources]
    if (search.length !== 0) {
      copy = filteredResources.filter(resource => (
        normalizeText(resource.title).includes(search)
      ))
    } else {
      copy = [...filteredResources]
    }
    setCopyResources(copy)
    resetSearchbar()
  }, [click])

  return (
    <div className='List'>
      {copyResources.length !== 0
      && (<h2>{sectionName}</h2>) }
      <ul className='List-content'>
        {copyResources.map(resource => (
          <li key={resource.id}>
            <ListItem resource={resource} sectionName={sectionName} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
