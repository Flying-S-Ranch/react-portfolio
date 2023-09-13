import 'bulma/css/bulma.min.css';

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
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
  </div>
</div>
      <a href="https://github.com/Flying-S-Ranch" class="button">Visit my Github profile</a>
      <a href="https://www.linkedin.com/in/samantha-shrauner/" class="button">Visit my LinkedIn profile</a>
      <a href="mailto:samleashrauner@gmail.com" class="button">Get in Touch by Email</a>
    </div>
  );
}