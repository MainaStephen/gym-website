import React from 'react'
import './Nav.scss'
import LOGO from '../../images/logo.png'
import {Link, NavLink} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'

function Navbar() {
  
  const [isNavShowing , setIsNavShowing] = useState(false);


  return (
    <nav>
        <div className='container nav_container'>
            
                <Link className='logo'to="/">
                    <img className='logo' src={LOGO} alt='navlogo' onClick={()=>setIsNavShowing(false)}/>
                </Link>
            
        
                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>

                <NavLink to="/"  onClick={()=>setIsNavShowing(false)}>HOME</NavLink>
                <NavLink to="/About"  onClick={()=>setIsNavShowing(false)}>ABOUT US</NavLink>
                <NavLink to="/Gallery"  onClick={()=>setIsNavShowing(false)}>GALLERY</NavLink>
                <NavLink to="/Plans"  onClick={()=>setIsNavShowing(false)}>PLANS</NavLink>
                <NavLink to="/Trainers"  onClick={()=>setIsNavShowing(false)}>TRAINERS</NavLink>
                <NavLink to="/Contacts"  onClick={()=>setIsNavShowing(false)}>CONTACT</NavLink>
                </ul>
                <button className='nav__toggle-btn' onClick={()=>setIsNavShowing(!isNavShowing)}>
                  
                {isNavShowing ? <MdOutlineClose /> : <FaBars />}

                    
                </button>
        
            </div>
       
    </nav>
  )
}

export default Navbar