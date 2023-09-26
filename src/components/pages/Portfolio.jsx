import 'bulma/css/bulma.min.css';
import '../../../src/index.css'

export default function Portfolio() {
  return (
    <div className='portfolio-section'>
      <div className='flex-container social-container is-flex'>

        {/* This is the card for the art app */}
        <div className="card column is-one-third flex-wrap m-1">
          <div className="card-content">
            <div className="media-content social-media">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img src="images/mainlogo.png" alt="art app logo"/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">"Untitled" Art App</p>
                  <p className="subtitle is-6">A platform for artists to connect and share their work</p>
                </div>
              </div>
            </div>
            <a href="https://github.com/vlexaega/project3-untitled" className="button is-info social-button">See the Github Repository</a>
          </div>
        </div>

        {/* This is the card for the character generator app */}
        <div className="card column is-one-third flex-wrap m-1">
          <div className="card-content">
            <div className="media-content social-media">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img src="images/LegendSmith-square.png" alt="starry sky"/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">LegendSmith</p>
                  <p className="subtitle is-6">Fantasy character generator</p>
                </div>
              </div>
            </div>
            <a href="https://github.com/branchwag/character-generator" className="button is-info social-button">See the Github Repository</a>
          </div>
        </div>

        {/* This is the card for the recycling app */}
        <div className="card column is-one-third flex-wrap m-1">
          <div className="card-image">
            <figure className="image is-4by3">
              <a href="https://legendsmith-77384eb64fff.herokuapp.com/char-form">
                <img src="images/LegendSmith.png" alt="fantasy character webpage image"/>
              </a>
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <a href="https://legendsmith-77384eb64fff.herokuapp.com/char-form">
                  <p className="title is-4">LegendSmith</p>
                </a>
                <a href="https://github.com/branchwag/character-generator">
                  <p className="subtitle is-6">Click here for the GitHub Repository</p>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            Generates fantasy names and backstories based on user input
          </div>
        </div>

      
      </div>
<div className="card contact-card flex-wrap">
<div className="card-image">
  <figure className="image is-4by3">
    <a href="https://flying-s-ranch.github.io/password-generator/">
      <img src="images/password.png" alt="password generator webpage"/>
    </a>
  </figure>
</div>
<div className="card-content">
  <div className="media">
    <div className="media-content">
      <a href="https://flying-s-ranch.github.io/password-generator/">
        <p className="title is-4">Password Generator</p>
      </a>
      <a href="https://github.com/Flying-S-Ranch/password-generator">
        <p className="subtitle is-6">Click here for the GitHub Repository</p>
      </a>
    </div>
  </div>
</div>
<div className="content">
Generates passwords with user-chosen characters and length
</div>
</div>

<div className="card contact-card flex-wrap">
      <div className="card-image">
        <figure className="image is-4by3">
          <a href="https://flying-s-ranch.github.io/daily-planner/">
            <img src="images/daily-planner.png" alt="daily planner webpage image"/>
          </a>
        </figure>
      </div>
      <div className="card-content is-primary">
        <div className="media">
          <div className="media-content">
            <a href="https://flying-s-ranch.github.io/daily-planner/">
              <p className="title is-4">Daily Planner</p>
            </a>
            <a href="https://github.com/Flying-S-Ranch/daily-planner">
              <p className="subtitle is-6">Click here for the GitHub Repository</p>
            </a>
          </div>
        </div>
      </div>
    <div className="content">
      Enables users to log and save daily plans with time tracking
    </div>
  </div>

  <div className="card contact-card flex-wrap">
<div className="card-image">
  <figure className="image is-4by3">
    <a href="https://untitled-art-app-b560d4f5fa59.herokuapp.com/">
      <img src="images/untitled.png" alt="untitled art app image"/>
    </a>
  </figure>
</div>
<div className="card-content">
  <div className="media">
    <div className="media-content">
      <a href="https://flying-s-ranch.github.io/javascript-quiz-game/">
        <p className="title is-4">untitled art app</p>
      </a>
      <a href="https://github.com/vlexaega/project3-untitled">
        <p className="subtitle is-6">Click here for the GitHub Repository</p>
      </a>
    </div>
  </div>
</div>
<div className="content">
A platform for artists to connect and share their work
</div>
</div>
    </div>
  );
}