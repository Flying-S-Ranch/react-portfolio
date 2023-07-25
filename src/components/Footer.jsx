// Connects Footer.jsx to Footer.css
import '../styles/Footer.css'

const styles = {
    footerStyle: {
        background: 'teal',
    }
}

function Footer() {
    return (
        <footer style={styles.footerStyle} className='footer'>
            <a href="https://github.com/Flying-S-Ranch">
              <h2>Visit my GitHub Profile</h2>
            </a>
        </footer>
    );
}

export default Footer;