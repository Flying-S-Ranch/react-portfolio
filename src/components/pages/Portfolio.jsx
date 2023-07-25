import 'bulma/css/bulma.min.css';

export default function Portfolio() {
  return (
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
              <p className="subtitle is-6">GitHub Repository</p>
            </a>
          </div>
        </div>
      </div>

    <div className="content">
      Shows users where and how to recycle tricky items<a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a> 
    </div>
  </div>
  );
}