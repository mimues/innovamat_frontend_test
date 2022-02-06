import React, { useEffect, useState } from 'react'
import { normalizeText } from 'utils/utils';
import ListItem from 'components/ListItem/ListItem'
import './List.css'

const List = ({ section, search, click }) => {
  const { resources, sectionName } = section
  let filteredResources = resources.filter((resource, index, resources) => (
    resources.findIndex(elem => (elem.id === resource.id)) === index
  ))
  const [copyResources, setCopyResources] = useState([...filteredResources])
  
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
  }, [click])

  return (
    <div className='List'>
      {copyResources.length !== 0
      ? (<h2>{sectionName}</h2>) 
      : (<></>) }
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
