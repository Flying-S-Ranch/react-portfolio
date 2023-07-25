import 'bulma/css/bulma.min.css';

export default function Portfolio() {
  return (
    <div>
    <div className='columns is-flex'>
    <div className="card column is-one-third flex-wrap m-1">
      <div className="card-image">
        <figure className="image is-4by3">
          <a href="https://croberts27.github.io/recyculator/">
            <img src="../../../../assets/images/Recyculator.png" alt="recycling webpage image"/>
          </a>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <a href="https://croberts27.github.io/recyculator/">
              <p className="title is-4">Recyculator</p>
            </a>
            <a href="https://github.com/croberts27/recyculator">
              <p className="subtitle is-6">Click here for the GitHub Repository</p>
            </a>
          </div>
        </div>
      </div>
    <div className="content">
      Shows users where and how to recycle tricky items
    </div>
  </div>

<div className="card column is-one-third flex-wrap m-1">
<div className="card-image">
  <figure className="image is-4by3">
    <a href="https://legendsmith-77384eb64fff.herokuapp.com/char-form">
      <img src="../../../../assets/images/LegendSmith.png" alt="fantasy character webpage image"/>
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

<div className="card column is-one-third flex-wrap m-1">
      <div className="card-image">
        <figure className="image is-4by3">
          <a href="https://flying-s-ranch.github.io/weather-dashboard/">
            <img src="../../../../assets/images/weather-dashboard.png" alt="weather webpage image"/>
          </a>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <a href="https://flying-s-ranch.github.io/weather-dashboard/">
              <p className="title is-4">Weather Dashboard</p>
            </a>
            <a href="https://github.com/Flying-S-Ranch/weather-dashboard">
              <p className="subtitle is-6">Click here for the GitHub Repository</p>
            </a>
          </div>
        </div>
      </div>
    <div className="content">
      Shows weather data based on user input
    </div>
  </div>
</div>
<div className='columns is-flex'>
<div className="card column is-one-third flex-wrap m-1">
<div className="card-image">
  <figure className="image is-4by3">
    <a href="https://flying-s-ranch.github.io/password-generator/">
      <img src="../../../../assets/images/password.png" alt="password generator webpage"/>
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

<div className="card column is-one-third flex-wrap m-1">
      <div className="card-image">
        <figure className="image is-4by3">
          <a href="https://flying-s-ranch.github.io/daily-planner/">
            <img src="../../../../assets/images/daily-planner.png" alt="daily planner webpage image"/>
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

<div className="card column is-one-third flex-wrap m-1">
<div className="card-image">
  <figure className="image is-4by3">
    <a href="https://flying-s-ranch.github.io/javascript-quiz-game/">
      <img src="../../../../assets/images/quiz.png" alt="multiple choice quiz webpage image"/>
    </a>
  </figure>
</div>
<div className="card-content">
  <div className="media">
    <div className="media-content">
      <a href="https://flying-s-ranch.github.io/javascript-quiz-game/">
        <p className="title is-4">JavaScript</p>
      </a>
      <a href="https://github.com/Flying-S-Ranch/javascript-quiz-game">
        <p className="subtitle is-6">Click here for the GitHub Repository</p>
      </a>
    </div>
  </div>
</div>
<div className="content">
Timed quiz with questions about JavaScript
</div>
</div>
    </div>
    </div>
  );
}