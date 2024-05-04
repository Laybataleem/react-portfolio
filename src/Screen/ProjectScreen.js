import NavBar from "../Component/NavBar";
import "../App.css";


export default function ProjectScreen() {


    return (


        <div>

            <NavBar />
            <div className="project-container">
                <div className="project1">
                    <h2 className="project-title">Project Title</h2>
                    <img src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/06/34_Builtin-1.png" alt="Project" className="project-image" />
                    <p className="project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id leo vel purus tempus efficitur.
                    </p>
                    <p className="project-details">
                        <strong>Technologies:</strong> React, CSS, HTML <br />
                        <strong>Duration:</strong> 3 months <br />
                        <strong>Client:</strong> ABC Company
                    </p>
                </div>
            </div>

            <div className="project-container">
                <div className="project1">
                    <h2 className="project-title">Project Title</h2>
                    <img src="https://miro.medium.com/v2/resize:fit:800/1*SiM1_ovtlvvQfLdR3mofGw.jpeg" alt="Project" className="project-image" />
                    <p className="project-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id leo vel purus tempus efficitur.
                    </p>
                    <p className="project-details">
                        <strong>Technologies:</strong> React, CSS, HTML <br />
                        <strong>Duration:</strong> 3 months <br />
                        <strong>Client:</strong> ABC Company
                    </p>
                </div>
            </div>


            </div>
            );
}
