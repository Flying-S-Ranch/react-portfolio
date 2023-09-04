import 'bulma/css/bulma.min.css';

export default function About() {
  return (
    <div className='is-flex'>
      <img src="../../../../assets/images/Shrauner.jpg" alt="Samantha with plant" width='250'  className='is-flex-shrink-2 is-flex-wrap-wrap'/>
      <p className='mx-2 is-flex-wrap-wrap'>
        Welcome to my personal portfolio. I am a junior developer eager to jump in and learn new skills. My favorite part of web development is the opportunity to blend problem solving and creativity in order to serve users well. I have experience with HTML, CSS, and JavaScript, and I have used technologies including MySQL, MongoDB and React. Full-stack web development is a fun addition to my other list of nerd credentials, which also includes a love of The Martian by Andy Weir, The Lord of the Rings, and the Apollo moon landings. 
      </p>
    </div>
  );
}