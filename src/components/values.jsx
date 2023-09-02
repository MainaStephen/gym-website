import React from 'react'
import Image from '../images/values.jpg'
import Sectionheader from './Sectionheader'
import {GiCutDiamond} from 'react-icons/gi'
import Card from '../ui/Card'
import { valuess } from '../data'


function values() {
  return (
    <section className='values'>
        <div className='container values_container'>
            <div className='values_left'>
                <div className='values_image'>
                    <img src={Image} alt='values'/>
                </div>
            </div>
            <div className='values_right'>
                <Sectionheader icon={<GiCutDiamond/>} title="values"/>
                <p>
                    These are the values of the gym
                </p>
                <div className='values_wrapper'>
                    {
                        valuess.map(({id, icon , title ,desc})=>{
                            return<Card key={id} className="values_value">
                                <span>
                                    {icon}
                                </span>
                                <h4>{title}</h4>
                                <small>{desc}</small>

                            </Card>
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default values