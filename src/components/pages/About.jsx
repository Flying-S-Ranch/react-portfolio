import 'bulma/css/bulma.min.css';
import '../../../src/index.css'

export default function About() {
  return (
<div>
<div className="card photo-card">
    <img src="../../../../assets/images/Shrauner.jpg" alt="Samantha with plant"  className='profile-photo'/>
</div>
    <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div className="content">
    <p> Welcome to my personal portfolio. I am a junior developer eager to jump in and learn new skills. My favorite part of web development is the opportunity to blend problem solving and creativity in order to serve users well. I have experience with HTML, CSS, and JavaScript, and I have used technologies including MySQL, MongoDB and React. Apart from web development, I also enjoy The Martian by Andy Weir, The Lord of the Rings, and the Apollo moon landings. 
    </p>
    </div>
  </div>
</div>
</div>
  )
}