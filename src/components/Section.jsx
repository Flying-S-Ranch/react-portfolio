// Connects Section.jsx to Section.css
import '../styles/Section.css'

const styles = {
    sectionStyles: {
        background: 'orange'
    }
}

function Section() {
    return (
        <section style={styles.sectionStyles} className='section'>
            <h2>I am a section</h2>
        </section>
    )
}

export default Section;