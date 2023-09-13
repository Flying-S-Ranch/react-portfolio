import 'bulma/css/bulma.min.css';
import '../styles/Header.css'

function Header({ currentPage, handlePageChange }) {
    return (
        <header className='is-flex-wrap-wrap'>
          <h1 className='is-size-1 m-2 is-flex-wrap-wrap'>Samantha Shrauner</h1>
          <nav className="navbar is-flex" role="navigation" aria-label="main navigation">

              <div className="navbar-item is-flex-wrap-wrap">
                <a 
                  className={currentPage === 'About' ? 'button is-danger' : 'button is-primary'} 
                  href="#about"
                  onClick={() => handlePageChange('About')}>
                   About Me
                </a>
              </div>
              <div className="navbar-item is-flex-wrap-wrap">
                <a 
                  className={currentPage === 'Portfolio' ? 'button is-danger' : 'button is-primary'} 
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}>
                   Portfolio
                </a>
              </div>
              <div className="navbar-item is-flex-wrap-wrap">
                <a 
                  className={currentPage === 'Contact' ? 'button is-danger' : 'button is-primary'} 
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}>
                   Contact
                </a>
              </div>
              <div className="navbar-item is-flex-wrap-wrap">
                <a 
                  className={currentPage === 'Resume' ? 'button is-danger' : 'button is-primary'} 
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}>
                   Resume
                </a>
              </div>
        </nav>
      </header>
    )
}

export default Header;