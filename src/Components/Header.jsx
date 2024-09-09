import React from 'react'
import { NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className='Header' >
                <h1 className='logo'>Dark Weather</h1>

                <ul className='links'>
                  <li>
                    <NavLink  to="/"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}><p>Home</p></NavLink>
                  </li>
                  <li>
                    <NavLink to="/Downloadapp" className={({ isActive }) => (isActive ? 'active' : 'inactive')} ><p>Download App</p></NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contactus" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><p>Contact Us</p></NavLink>
                  </li>
                  
                </ul>

                <button className='button'>Sign Up</button>
                
        </div>

    </div>
  )
}

export default Header