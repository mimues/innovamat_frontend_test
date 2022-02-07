import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { DYNAMICS } from 'constants/constants';

const Navbar = () => {
  const activeLink = ({ isActive }) => {
    return isActive ? 'isActive' : undefined
  }

  return (
    <nav className='NavBar-container'>
      <h4 className='NavBar-title'>Dinámicas</h4>
      <ul className='NavBar-list'>
        {DYNAMICS.map(dynamic => (
          <li key={dynamic.name}>
            <NavLink className={activeLink} to={`/dinamicas/${dynamic.name}`}>
              <img src={dynamic.src} alt={`${dynamic.name} icon`} />
              <span>{dynamic.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navbar;
