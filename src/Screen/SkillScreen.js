import NavBar from "../Component/NavBar";
import "../App.css";


export default function SkillScreen(){


    return(

        <div>
<NavBar/>


<div className="skill-container">
      <h2 className="screen-title">Frontend Developer Skills</h2>
      <div className="skills">
        <div className="skill">
          <h3>HTML5</h3>
          <p>Proficient in writing semantic HTML markup.</p>
        </div>
        <div className="skill">
          <h3>CSS3</h3>
          <p>Strong understanding of CSS layout techniques, including Flexbox and Grid.</p>
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <p>Advanced knowledge of JavaScript, including ES6+ features.</p>
        </div>
        <div className="skill">
          <h3>React</h3>
          <p>Experience in building responsive web applications with React.</p>
        </div>
        {/* Add more skills as needed */}
      </div>
    </div>
        </div>
    )
}