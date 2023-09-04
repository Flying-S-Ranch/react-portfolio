import 'bulma/css/bulma.min.css';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
          <h1>Samantha Shrauner</h1>
          <nav className="navbar" role="navigation" aria-label="main navigation">

              <div className="navbar-item">
                <a 
                  className={currentPage === 'About' ? 'navbar-item-active-color' : 'navbar-item'} 
                  href="#about"
                  onClick={() => handlePageChange('About')}>
                   About Me
                </a>
              </div>
              <div className="navbar-item">
                <a 
                  className={currentPage === 'Portfolio' ? 'navbar-item-active-color' : 'navbar-item'} 
                  href="#portfolio"
                  onClick={() => handlePageChange('Portfolio')}>
                   Portfolio
                </a>
              </div>
              <div className="navbar-item">
                <a 
                  className={currentPage === 'Contact' ? 'navbar-item-active-color' : 'navbar-item'} 
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}>
                   Contact
                </a>
              </div>
              <div className="navbar-item">
                <a 
                  className={currentPage === 'Resume' ? 'navbar-item-active-color' : 'navbar-item'} 
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}>
                   Resume
                </a>
              </div>
          <div id="navbarElements" className="navbar-menu">
            <div className="navbar-start">




            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;