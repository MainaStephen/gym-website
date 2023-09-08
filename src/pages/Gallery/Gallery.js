import React from 'react'
import './gallery.scss'
import Header from '../../components/Navbar/Header'
import headerimage from '../../images/header_bg_3.jpg'

function Gallery() {

  const galleryLength = 15;
  const images = []

  for(let i = 1 ; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
    <Header title= "Our Gallery" image= {headerimage}>
      <p>
        We are a group of young and dynamic individuals who love to work on projects that have real impact in the society, we believe in working with people
      </p>
    </Header>
    <section className='gallery'> 
    <div className='container gallery_container'>
      {
        images.map((image , index) =>{
          return <article key={index}>
            <img style={{width:'97%'}} src={image} alt="Gallery"/>
          </article>
        })
      }
    </div>
    </section>
    </>
  )
}

export default Gallery