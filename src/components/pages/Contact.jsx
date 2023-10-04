import 'bulma/css/bulma.min.css';
import '../../../src/index.css'

export default function Contact() {
  return (
    <div>
      <div className="flex-container social-container is-flex">
        
        {/* Github Contact Card */}
        <div className="card contact-card flex-wrap">
          <div className="card-content">
              <div className="media-content social-media">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="images/github-mark.png" alt="Github logo"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Github</p>
                    <p className="subtitle is-6">github.com/Flying-S-Ranch</p>
                  </div>
                </div>
              </div>
              <a href="https://github.com/Flying-S-Ranch" className="button is-info social-button">Visit my Github profile</a>
          </div>
        </div>

        {/* LinkedIn Contact Card */}
        <div className="card contact-card flex-wrap">
          <div className="card-content">
              <div className="media-content social-media">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="images/LI-In-Bug.png" alt="LinkedIn logo"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">LinkedIn</p>
                    <p className="subtitle is-6">linkedin.com/in/samantha-shrauner/</p>
                  </div>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/samantha-shrauner/" className="button is-info social-button">Visit my LinkedIn profile</a>
          </div>
        </div>

        {/* Gmail Contact Card */}
        <div className="card contact-card flex-wrap">
          <div className="card-content">
              <div className="media-content social-media">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src="images/Gmail_Icon.original.png" alt="Gmail logo"/>
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Email</p>
                    <p className="subtitle is-6">samleashrauner@gmail.com</p>
                  </div>
                </div>
              </div>
              <a href="mailto:samleashrauner@gmail.com" className="button is-info social-button">Get in Touch by Email</a>
          </div>
        </div>
  
      </div>
    </div>
  )
}