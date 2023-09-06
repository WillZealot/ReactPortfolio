import '../css/app.css'

export default function Resume() {
    return (
        <div className="Resume">
      <object
        data="./assets/images/Resume.pdf" // Replace with the path to your PDF file
        type="application/pdf"
        width="100%"
        height="500px"
      >
        <p>Sorry, your browser doesn't support embedded PDFs. You can download the PDF <a href="./assets/images/Resume.pdf">here</a>.</p>
      </object>
    </div>
    )
}