import 'bulma/css/bulma.min.css';

export default function Contact() {
  return (
    <div>
      <h2>Contact Me</h2>
      <div className="card">
  
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="images/github-mark.png" alt="Github logo"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
      <a href="https://github.com/Flying-S-Ranch" class="button is-info">Visit my Github profile</a>
    </div>
  </div>
</div>
      <a href="https://www.linkedin.com/in/samantha-shrauner/" class="button">Visit my LinkedIn profile</a>
      <a href="mailto:samleashrauner@gmail.com" class="button">Get in Touch by Email</a>
    </div>
  );
}