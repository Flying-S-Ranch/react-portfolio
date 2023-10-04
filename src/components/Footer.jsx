// Connects Footer.jsx to Footer.css
import 'bulma/css/bulma.min.css';
import '../index.css'
import '../styles/Footer.css'


function Footer() {
    return (
        <footer className='footer is-flex-direction-column is-justify-content-center'>
            <h3>Thank you for visiting my portfolio. If you'd like to see more,</h3>
            <a href="https://github.com/Flying-S-Ranch" class="button is-info">Visit my Github profile</a>
        </footer>
    );
}

export default Footer;