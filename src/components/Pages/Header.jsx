// Connects Header.jsx to Header.css
import '../styles/Header.css'
// import Navbar from './UI/Navbar'

const styles = {
    headerStyle: {
        background: 'red',
    },
    headingStyle: {
        fontSize:'70px'
    },
}

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <h1 className='navbar-item'>Samanth Shrauner</h1>
            </div>

          <div id="navbarElements" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                About Me
              </a>

              <a className="navbar-item">
                Portfolio
              </a>

              <a className="navbar-item">
                Contact
              </a>

              <a className="navbar-item">
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;