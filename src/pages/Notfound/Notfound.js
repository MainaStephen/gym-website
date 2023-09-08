import React from 'react'
import './Notfound.scss'
import {Link} from 'react-router-dom'

function Notfound() {
  return (
    <section>
        <div className='container notfound_container'>
            <h2> Page Not Found</h2>
            <Link to="/" className='btn'>Go Back Home</Link>
        </div>
    </section>
  )
}

export default Notfound