import React from 'react'
import Header from '../../components/Navbar/Header'
import headerimage from '../../images/header_bg_4.jpg'
import Card from '../../ui/Card'
import { plans } from '../../data'
import './plans.scss'

function Plans() {
  return (
    <>
    <Header title="Membership plans" image ={headerimage}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae orci auctor, sodales nulla non, tincidunt odio. Nulla facilisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos? Consequatur nemo doloremque autem eum volupt
    </Header>
    <section className='plans'>
        <div className='container plans_container'>
            {
                plans.map(({id , name , desc, price , features})=>{
                    return <Card key={id} className="plan">
                        <h3>{name}</h3>
                        <small>{desc}</small>
                        <h1>`${price}`</h1><h2>/mo</h2>
                        <h4>Features</h4>
                        {
                            features.map(({feature, available},index)=>{
                               return<p key={index} className={!available ? 'disabled' : "" }>{feature}</p> 
                            })
                        }
                        <button className='btn lg'>Choose Plan</button>
                    </Card>
                })
            }

        </div>
    </section>
    </>
  )
}

export default Plans