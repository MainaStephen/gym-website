import React from 'react'
import Sectionheader from './Sectionheader'
import {faqs} from '../data'
import { FaQuestion } from 'react-icons/fa'
import Faqs from './Faqs'
import '../pages/Home/Home.scss'

function FAQ() {
  return (
   <section className='faqs'>
    <div className='container faqs_container'>
      <Sectionheader icon={<FaQuestion/>} title="FAQS"/>
      <div className='faq_wrapper'>
        {
          faqs.map(({id , question , answer})=>{
            return <Faqs key={id} question={question} answer={answer} />
          })
        }
      </div>
    </div>
   </section>
  )
}

export default FAQ