import React from 'react'
import './About.scss'
import Header from '../../components/Navbar/Header'
import headerimage from '../../images/header_bg_1.jpg'
import storyimage from  '../../images/about1.jpg'
import storyimage2 from  '../../images/about2.jpg'
import missionimage from  '../../images/about3.jpg'



function About() {
  return (
    <>
    <Header  title="About Us" image={headerimage}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.
    </Header>

    <section className='about_story'>
      <div class="container about_story-container">
        <div className='about_section-image'>
          <img src={storyimage} alt='about'/>
        </div>
        <div className='about_section-content'>
          <h1>Our story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci auctor, sodales nulla non, tincidunt odio. Nulla facilisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt
          </p>
        </div>
      </div>
    </section>
    <section className='about_story'>
      <div class="container about_vision-container">
        
        <div className='about_section-content'>
          <h1>Our vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci auctor, sodales nulla non, tincidunt odio. Nulla facilisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt
          </p>
        </div>
        <div className='about_section-image'>
          <img src={storyimage2} alt='about'/>
        </div>
      </div>
    </section>
    <section className='about_story'>
      <div class="container about_mission-container">
        <div className='about_section-image'>
          <img src={missionimage} alt='about'/>
        </div>
        <div className='about_section-content'>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci auctor, sodales nulla non, tincidunt odio. Nulla facilisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About