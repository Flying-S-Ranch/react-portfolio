import 'bulma/css/bulma.min.css';
import '../../../src/index.css'

export default function Portfolio() {
  return (
    <div className='portfolio-section'>
      <div className='flex-container social-container is-flex'>

        {/* This is the card for the art app */}
        <div className="card project-card flex-wrap">
          <img src="images/untitled-app.png" alt="art platform website" className='project-image' />
          <div className="hidden">
            <div className="media-content">
              <p className="title is-4 my-1">"Untitled" Art App</p>
              <p className="subtitle is-6 my-2">A platform for artists to connect and share their work</p>
              <p className="subtitle is-6">Tech: React, Tailwind, MongoDB, Express, NodeJS</p>
            </div>
            <div className='project-buttons'>
              <a href="https://untitled-art-app-b560d4f5fa59.herokuapp.com/" className="button is-info social-button mx-1">See the App</a>
              <a href="https://github.com/vlexaega/project3-untitled" className="button is-info social-button">Github Repo</a>
              <p>guest@guest.com 1234guest</p>
            </div>
          </div>
        </div>

        {/* This is the card for the character generator app */}
        <div className="card project-card flex-wrap">
          <img src="images/LegendSmith.png" alt="character generator website" className='project-image' />
          <div className="hidden">
            <div className="media-content">
              <p className="title is-4 my-1">LegendSmith</p>
              <p className="subtitle is-6 my-2">Fantasy character generator</p>
              <p className="subtitle is-6">Tech: MySQL, JavaScript, Bootstrap, HTML, NodeJS</p>
            </div>
            <div className='project-buttons'>
              <a href="https://legendsmith-77384eb64fff.herokuapp.com/login" className="button is-info social-button mx-1">See the App</a>
              <a href="https://github.com/Flying-S-Ranch/character-generator" className="button is-info social-button">Github Repo</a>
              <p>guest@guest.com 1234guest</p>
            </div>
          </div>
        </div>

        {/* This is the card for the recycling app */}
        <div className="card project-card flex-wrap">
          <img src="images/Recyculator.png" alt="recycling website" className='project-image' />
          <div className="hidden">
            <div className="media-content">
              <p className="title is-4 my-1">Recyculator</p>
              <p className="subtitle is-6 my-2">Provides recycling information and locations</p>
              <p className="subtitle is-6">Tech: HTML, CSS, JavaScript, Bulma</p>
            </div>
            <div className='project-buttons'>
              <a href="https://flying-s-ranch.github.io/recyculator2/" className="button is-info social-button mx-1">See the App</a>
              <a href="https://github.com/Flying-S-Ranch/recyculator2" className="button is-info social-button">Github Repo</a>
              <p>guest@guest.com 1234guest</p>
            </div>
          </div>
        </div>
      </div>   
      
    </div>
  );
}