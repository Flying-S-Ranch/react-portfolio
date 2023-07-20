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
            <h2>Hello from the footer!</h2>
        </footer>
    );
}

export default Footer;