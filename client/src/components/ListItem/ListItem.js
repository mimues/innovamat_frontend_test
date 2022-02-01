import React from 'react'
import './ListItem.css'
import emptyHeart from 'img/favorite_border_24px.png'

const ListItem = ({ resource }) => {
  const { image, title, description } = resource

  return (
    <div className='ListItem-card'>
      <div className='ListItem-card-content'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <button>
          <img className='heart' src={emptyHeart} alt="Heart" />
          <span>Favorito</span>
        </button>
      </div>
    </div>
  )
}

export default ListItem;
