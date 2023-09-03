import '../css/app.css'

export default function Nav() {
    return (
    <div>
    <h1>WilliamDevelops</h1>
    <div><h5 id='aboutMe'selected='true'>About Me</h5>
    <h5 id='resume' selected='false'>Resume</h5>
    <h5 id='contactMe' selected='false'>Contact Me</h5>
    <h5 id='projects' selected='false'>Projects</h5></div>
    </div>
    )
    
}