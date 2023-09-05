// Connects Footer.jsx to Footer.css
import '../index.css'
import 'bulma/css/bulma.min.css';

// const styles = {
//     footerStyle: {
//         background: 'teal',
//     }
// }

function Footer() {
    return (
        <footer className='footer is-flex-direction-column is-justify-content-center'>
            <h2>Thank you for visiting my portfolio. If you'd like to see more,</h2>
            <a href="https://github.com/Flying-S-Ranch" class="button is-info">Visit my Github profile</a>
        </footer>
    );
}

export default Footer;