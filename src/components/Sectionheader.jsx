import React from 'react'
// the icon, title, classname are props
function Sectionheader({icon, title, className}) {
  return (
    <div className={`section_head ${className}`}>
        <span >{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}

export default Sectionheader