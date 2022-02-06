import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import taller from 'img/Talleres_icon.png'
import rincon from 'img/Rincones_icon.png'
import ambiente from 'img/Ambientes_icon.png'
import rutina from 'img/Rutinas_icon.png'

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return isActive ? 'isActive' : undefined
  }

  return (
    <nav className='NavBar-container'>
      <h4 className='NavBar-title'>Dinámicas</h4>
      <ul className='NavBar-list'>
        <li>
          <NavLink className={activeLink} to='/talleres'>
            <img src={taller} alt="Taller icon" />
            <span>Talleres</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to='/rincones'>
            <img src={rincon} alt="Rincon icon" />
            <span>Rincones</span>
          </NavLink>
        </li>
        <li> 
          <NavLink className={activeLink} to='/ambientes'>
            <img src={ambiente} alt="Ambiente icon" />
            <span>Ambientes</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={activeLink} to='/rutinas'>
            <img src={rutina} alt="Rutina icon" />
            <span>Rutinas</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
