import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from 'context/AppContext';
import './ListItem.css'
import emptyHeart from 'img/favorite_border_24px.png'

const ListItem = ({ resource }) => {
  const { image, title, description, id } = resource
  const [favorite, setFavorite] = useState(false)
  const { addFavorite, deleteFavorite } = useContext(AppContext)

  const addToFavorites = (id) => {
    if (!favorite) {
      addFavorite(id)
      toggleFavorite()
    } else {
      deleteFavorite(id)
      toggleFavorite()
    }
  }

  const toggleFavorite = () => {
    setFavorite(!favorite)
  }

  return (
    <div className='ListItem-card'>
      <div className='ListItem-card-content'>
        <Link to={`/resources/${id}`}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
        <button onClick={() => addToFavorites(id)}>
          <img className='heart' src={emptyHeart} alt="Heart" />
          <span>Favorito</span>
        </button>
      </div>
    </div>
  )
}

export default ListItem;
