import React, {useState} from 'react';
import './Searchbar.css'
import { normalizeText } from 'utils/utils';
import collapse from 'img/Collapse.png'
import filter from 'img/Filter.png'

const Searchbar = (props) => {
  const [click, setClick] = useState(false)

  const handleChange = e => {
    let query = normalizeText(e.target.value)
    props.getInfo(query)
  }

  const handleClick = () => {
    if (click) {
      props.getClick(click)
      setClick(false)
    } else {
      props.getClick(click)
      setClick(true)
    }
  }
  
  return (
    <div className='Searchbar-container'>
      <div className='Searchbar-form'>
        {/* <button className='Searchbar-filter'>
          <img src={collapse} alt="Collapse icon" />
          <span>FILTROS</span>
          <img src={filter} alt="Filter icon" />
        </button> */}
        <input 
          className="Searchbar-input"
          type="search"
          placeholder="Introduce un texto"
          name="search"
          onChange={handleChange}
        />
        <button 
          className='Searchbar-button'
          onClick={handleClick}
        >
          Buscar
        </button>
      </div>
    </div>
  )
};

export default Searchbar;
