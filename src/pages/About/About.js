import React from 'react'
import './About.scss'
import Header from '../../components/Navbar/Header'
import headerimage from '../../images/header_bg_1.jpg'
import storyimage from  '../../images/about1.jpg'

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
      </div>
    </section>
    </>
  )
}

export default About