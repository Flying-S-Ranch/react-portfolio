import 'bulma/css/bulma.min.css';

export default function Portfolio() {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">Recyculator</p>
            <p className="subtitle is-6">@johnsmith</p>
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