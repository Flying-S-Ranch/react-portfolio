import 'bulma/css/bulma.min.css';
import '../../../src/index.css'

export default function About() {
  return (
<div className='about flex-container'>
<div className="card photo-card flex-item">
  <figure className='flex-container'>
    <img src="images/Shrauner.jpg" alt="Samantha with plant"  className='profile-photo'/>
  </figure>
</div>
    <div className="card flex-item">
  <div className="card-content">

    <div className="content">
    <p> Welcome to my personal portfolio. I am a junior developer eager to jump in and learn new skills. My favorite part of web development is the opportunity to blend problem solving and creativity in order to serve users well. I have experience with HTML, CSS, and JavaScript, and I have used technologies including MySQL, MongoDB and React. Apart from web development, I also enjoy The Martian by Andy Weir, The Lord of the Rings, and the Apollo moon landings. 
    </p>
    </div>
  </div>
</div>
</div>
  )
}