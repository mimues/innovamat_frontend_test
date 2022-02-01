import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import taller from 'img/Talleres_icon.png'
import rincon from 'img/Rincones_icon.png'
import ambiente from 'img/Ambientes_icon.png'
import rutina from 'img/Rutinas_icon.png'

const Navbar = () => {
  return (
    <nav className='NavBar-container'>
      <h4 className='NavBar-title'>Dinámicas</h4>
      <ul className='NavBar-list'>
        <li>
          <img src={taller} alt="Taller icon" />
          <NavLink to='/talleres'>Talleres</NavLink>
        </li>
        <li>
          <img src={rincon} alt="Rincon icon" />
          <NavLink to='/rincones'>Rincones</NavLink>
        </li>
        <li>
          <img src={ambiente} alt="Ambiente icon" />
          <NavLink to='/ambientes'>Ambientes</NavLink>
        </li>
        <li>
          <img src={rutina} alt="Rutina icon" /> 
          <NavLink to='/rutinas'>Rutinas</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
