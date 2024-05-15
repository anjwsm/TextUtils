import React from 'react' ;
import './Navbar.css' ;

export const Navbar = (props) => {
  return (
    <div className='navbar-container'>
        <nav className="navbar">
        <p className="title">{props.title}</p>
        <ul>
          <li>Home </li>
          <li>{props.about} </li>
        </ul>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="togglebutton" />
       
      </nav>
    </div>
  )
}
