import 'bulma/css/bulma.min.css';

export default function Portfolio() {
  return (
    <div>
    <div className="card">
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

<div className="card">
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
        <p className="title is-4">Recyculator</p>
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
  );
}