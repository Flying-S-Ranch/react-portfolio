import 'bulma/css/bulma.min.css';
import '../styles/Header.css'

const styles = {
    headerStyle: {
        background: 'red',
    },
    headingStyle: {
        fontSize:'70px'
    },
}

// eslint-disable-next-line react/prop-types
function Header({ currentPage, handlePageChange }) {
    return (
        <header style={styles.headerStyle}>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <h1 className='navbar-item'>Samantha Shrauner</h1>
            </div>

          <div id="navbarElements" className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item">
                <a 
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} 
                  href="#about"
                  onClick={() => handlePageChange('About')}>
                   About Me
                </a>
              </div>

              <div className="navbar-item">
                <a 
                  className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} 
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}>
                   Portfolio
                </a>
              </div>

              <div className="navbar-item">
                <a 
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}>
                   Contact
                </a>
              </div>

              <div className="navbar-item">
                <a 
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}>
                   Resume
                </a>
              </div>

            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;