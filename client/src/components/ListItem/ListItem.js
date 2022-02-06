import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import AppContext from 'context/AppContext';
import './ListItem.css'
import emptyHeart from 'img/favorite_border_24px.png'
import fullHeart from 'img/favorite_full_24px.png'

const ListItem = ({ resource, sectionName }) => {
  const { image, title, description, id, tag } = resource
  //There are duplicated ids in different dynamics and sectionName
  const uniqueId = `${tag} - ${sectionName} - ${id}`
  const { favorites, addFavorite, deleteFavorite } = useContext(AppContext)
  const [favorite, setFavorite] = useState(false)

  //Check favorites on render to update state
  useEffect(() => {
    if (favorites.length > 0) {
      let isFavorite = favorites.includes(uniqueId)
      setFavorite(isFavorite)
    } else {
      return
    }
  }, []);

  //Add or remove from favorites
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
        <button onClick={() => addToFavorites(uniqueId)}>
          <div className='ListItem-card-favorite'>
            {favorite
            ? <>
                <img className='heart' src={fullHeart} alt="Heart" />
                <span style={{color: '#18C6AC'}}>Favorito</span>
              </>
            : <>
                <img className='heart' src={emptyHeart} alt="Heart" />
                <span sytle={{color: 'black'}}>Favorito</span>
              </>
            }
          </div>
        </button>
      </div>
    </div>
  )
}

export default ListItem;
