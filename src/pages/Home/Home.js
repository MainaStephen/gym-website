import React from 'react'
import './Home.scss'
// import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Image from  '../../images/main_header.png'
import {FaCrown} from 'react-icons/fa'
import Sectionheader from '../../components/Sectionheader'
import { programs } from '../../data'
import Card from '../../ui/Card'
import {AiFillCaretRight} from 'react-icons/ai'
import Values from '../../components/values'
import Faq from '../../components/FAQ'
import Testimonials from '../../components/Testimonials'
// import Footer from '../../components/Footer'


function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <header className='main_header'>
        <div className='container main_header-container'>
          <div className='main_header-left'>
            <h4 style={{color:'white'}}>#100days of work out</h4>
            <h1 style={{color:'white'}}>Join The Legends of Fitness</h1>
            <p style={{color:'white'}}>
            "Keep up the great work on your fitness journey! Your dedication is inspiring others to make positive changes too.
            </p>
            <Link to="/Plans" className='btn lg'>GET STARTED</Link>
          </div>
          <div className='main_header-right'>
            <div className='main_header-circle'></div>
            <div className='main_header-image'>
              <img src={Image} alt='headerimage'/>
            </div>
          </div>
        </div>

      </header>
      {/* the props in section header are from here */}
      <section className='programs'>
       <div className='container programs_container'>
        <Sectionheader icon ={<FaCrown/>} title = "Programs"/>
        <div className='programs_wrapper'>
          {
            programs.map(({id, icon, title, info, path })=>{
              return (
                <Card className="programs_program" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className='btn sm'> Learn More<AiFillCaretRight/></Link>
              </Card>
              )
              
            })
          }
        </div>
       </div>
      </section>
      <Values/>
      <Faq/>
      <Testimonials/>
      
      
    </div>
  )
}

export default Home