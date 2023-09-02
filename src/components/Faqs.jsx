import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
// import { faqs } from '../data'
import { useState } from 'react'

function Faqs( {question , answer}) {


  const[IsAnswerShowing, setIsAnswerShowing]=useState(false);


  return (
    <article className='faq' onClick={()=> setIsAnswerShowing(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className='faq_icon'>
                {IsAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/> }
            </button>
        </div>
      {IsAnswerShowing  && <p>{answer}</p>}
    </article>
  )
}

export default Faqs