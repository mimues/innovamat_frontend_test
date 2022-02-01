import React from 'react'
import ListItem from 'components/ListItem/ListItem'
import './List.css'

const List = ({ section }) => {
  const { resources, sectionName } = section

  return (
    <div className='List'>
      <h2>{sectionName}</h2>
      <ul className='List-content'>
        {resources.map(resource => (
          //hay ids repetidos
          <li key={resource.id}>
            <ListItem resource={resource}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
