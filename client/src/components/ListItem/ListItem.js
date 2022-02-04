import React from 'react'
import './ListItem.css'
import emptyHeart from 'img/favorite_border_24px.png'
import { Link } from 'react-router-dom';

const ListItem = ({ resource }) => {
  const { image, title, description, id } = resource

  return (
    <div className='ListItem-card'>
      <div className='ListItem-card-content'>
        <Link to={`/resources/${id}`}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
        <button>
          <img className='heart' src={emptyHeart} alt="Heart" />
          <span>Favorito</span>
        </button>
      </div>
    </div>
  )
}

export default ListItem;
