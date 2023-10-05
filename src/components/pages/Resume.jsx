export default function Resume() {
  return (
    <div>
      <div className="resume-box">
        <h2 className="resume-title">Resume</h2>
        {/* I learned about the download attribute from a W3 schools article, please see README for link */}
        <a href="files/resume.pdf" className="button is-info social-button" download>Download PDF</a>
      </div>
      {/* I learned how to use an embed element from an online article, please see the README for the link */}
      <div className="resume-container">
        <embed src="files/resume.pdf" type="application/pdf" className="resume"/>
      </div>
    </div>
  );
}