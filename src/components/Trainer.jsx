import Card from '../ui/Card'

function Trainer({image, name, job, socials}) {
  return (
    <Card className="trainer">
        <div className='trainer_img'>
            <img style={{width:'62%'}} src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className='trainer_socials'>
                {
                    socials.map(({icon,link},index)=>{
                        return< a key={index} href={link} target="_blank" rel="noreferrer">{icon}</a>
                    })
                }
            </div>
        </div>
    </Card>
  )
}

export default Trainer