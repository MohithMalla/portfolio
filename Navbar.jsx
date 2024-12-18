import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const navlinkStyles = ({ isActive }) => {
    return {
      fontweight: isActive ? 'bolder' : 'normal',
    };
  };

  return (
    <div className='navbar'>
      <img className='navimg' src='/mmicon.png' alt='MM'/>
      <nav>
        <NavLink to="/" style={navlinkStyles}>Home</NavLink>
        <NavLink to="/about" style={navlinkStyles}>About</NavLink>
        <NavLink to="/projects" style={navlinkStyles}>Projects</NavLink>
        <NavLink to='/contactme' style={navlinkStyles}><button className='contact'><img className='msgimg' src='/msgimg.png' alt='hireme'/>contact me</button></NavLink>
        
      </nav>
      </div>
  );
}

export default Navbar;
