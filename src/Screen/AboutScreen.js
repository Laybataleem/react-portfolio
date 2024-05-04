
import "../App.css"
import NavBar from "../Component/NavBar";

export default function AboutScreen() {
    return (


        <div>  


            <NavBar/>
            <div className="about-container">
                <div className="sections-container"></div>
                <section className="section">
                    <h2 className="section-title">Skills</h2>
                    <ul className="list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        {/* Add more skills as needed */}
                    </ul>
                </section>

                <section className="section">
                    <h2 className="section-title">Experience</h2>
                    <div className="experience">
                        <div className="experience-item">
                            <h3>Frontend Developer</h3>
                            <p>Company Name - Date</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id leo vel purus tempus efficitur.</p>
                        </div>
                        {/* Add more experience items as needed */}
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-title">Projects</h2>
                    <div className="projects">
                        <div className="project">
                            <h3>Project Name</h3>
                            <p>Description of the project Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id leo vel purus tempus efficitur.</p>
                        </div>
                        {/* Add more projects as needed */}
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-title">Testimonials</h2>
                    <div className="testimonials">
                        <div className="testimonial">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id leo vel purus tempus efficitur."</p>
                            <p>- Client Name</p>
                        </div>
                        {/* Add more testimonials as needed */}
                    </div>
                </section>
            </div>
        </div>
    );
}
