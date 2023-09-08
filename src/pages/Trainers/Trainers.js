import React from 'react'
import './Trainers.scss'
import Headerimage from '../../images/header_bg_5.jpg'
import Header from '../../components/Navbar/Header'
import { trainers } from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../components/Trainer'



function Trainers() {
  return (
    <>
    <Header title='Our Trainers' image= {Headerimage}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci auctor, sodales nulla non, tincidunt odio. Nulla facilisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt
    </Header>
    <section>
      <div className='container trainers_container'>
        {
          trainers.map(({id , image, name ,job , socials})=>{
            return <Trainer key={id} image={image} name = {name} job = {job} socials={
              [
                {icon : <BsInstagram/> , link:socials[0]},
                {icon : <AiOutlineTwitter/> , link:socials[1]},
                {icon : <FaFacebookF/> , link:socials[2]},
                {icon : <FaLinkedinIn/> , link:socials[3]}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers