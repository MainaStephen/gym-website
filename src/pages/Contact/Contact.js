import React from 'react'
import './Contact.scss'
// import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Navbar/Header'
import headerimage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

function Contact() {
  return (
    <>
    <Header title= "Get In Touch" image = {headerimage}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci auctor, sodales nulla non, tincidunt odio. Nulla facilisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt </Header>

    <section className='contact'>
      <div className='container contact_container'>
        <div className='contact_wrapper'>
          <a href='mailto:support@gmail.com' target='_blank' rel='noreferrer'><MdEmail/></a>
          <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><BsMessenger/></a>
          <a href='https://wa.me/+254717220807' target='_blank' rel='noreferrer'><IoLogoWhatsapp/></a>
        </div>
      </div>

    </section>
    
    
    </>
  )
}

export default Contact