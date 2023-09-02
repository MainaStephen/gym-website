import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer >
        <div className='container footer_container'>
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt=""  className='footerlogo'/>
                </Link>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dicta? Modi magnam, perspiciatis quis, cupiditate, magni debitis adipisci natus beatae ducimus voluptatem velit voluptatum aperiam nisi amet commodi voluptas aspernatur?</p>

                <div className='footer_socials'>
                    <a href="https://linkedin.com/" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com/" target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://instagram.com/" target='_blank' rel='noreferrer noopener'><FaInstagram/></a>
                    <a href="https://twitter.com/" target='_blank' rel='noreferrer noopener'><FaTwitter/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about"> ABOUT</Link>
                <Link to="/Plans"> PLANS</Link>
                <Link to="/Trainers"> TRAINERS</Link>
                <Link to="/Gallery"> GALLERY</Link>
                <Link to="/Contacts"> CONTACT US</Link>

            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about"> ABOUT</Link>
                <Link to="/Plans"> PLANS</Link>
                <Link to="/Trainers"> TRAINERS</Link>
                <Link to="/Gallery"> GALLERY</Link>
                <Link to="/Contacts"> CONTACT US</Link>

            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about"> ABOUT</Link>
                <Link to="/Plans"> PLANS</Link>
                <Link to="/Trainers"> TRAINERS</Link>
                <Link to="/Gallery"> GALLERY</Link>
                <Link to="/Contacts"> CONTACT US</Link>

            </article>
        </div>
        <div className='footer_copyright'>
                <small>@2023 React Tutorials &copy; All Rights Reserved</small>
            </div>
    </footer>
  )
}

export default Footer