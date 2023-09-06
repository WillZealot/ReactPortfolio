import '../css/app.css'
import myPicture from '../images/Picsart_23-07-04_19-52-40-412.png'
export default function AboutMe() {
    return (
    <div className="AboutMe">
        <img id="myPic"src={myPicture} alt="Will Pic"></img>
    <div id="AboutMeText">
        <h3>Hello, I'm William Tikhonenko</h3>
        <p >
I'm a versatile software developer with expertise in both frontend and backend development, specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. My skill set includes JavaScript, Node.js, CSS, HTML, MySQL, and NoSQL databases. I have a knack for crafting seamless user experiences, whether it's building web applications, Progressive Web Apps (PWAs), or RESTful APIs. With a passion for staying up-to-date with the latest technologies, I'm eager to tackle diverse challenges and contribute to innovative projects.</p>
    </div>
    </div>
    )
}