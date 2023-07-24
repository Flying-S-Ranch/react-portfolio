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

const linkStyle = { border: '1px black', padding: '5px' };

function Header() {
    return (
        <header style={styles.headerStyle} className='header'>
            <h1 style={styles.headingStyle}>Samantha Shrauner</h1>
            {/* The nav header is adapted from module 20, activity 9 */}
            <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="#">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Login</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Register</a>
        </div>
        <div style={linkStyle}>
          <a href="#">About</a>
        </div>
        <div style={linkStyle}>
          <a href="#">Contact</a>
        </div>
      </section>
    </nav>
        </header>
    )
}

export default Header;