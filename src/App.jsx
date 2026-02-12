import labels from "./images/sahara-labels.jpg"
import tech from "./images/sahara-tech.jpg"
import opto from "./images/sahara-opto.jpg"
import college from "./images/getmycollege.jpg"
import school from "./images/getmyschool.jpg"
import "./App.css"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import resume from "./resume.pdf"



function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <h2 className="logo">Pravalik Portfolio</h2>

          {/* Desktop Menu */}
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">


        {/* HERO */}
        <section className="hero">
          <h1>WEB Developer 👋</h1>
          
          <p>
            I build modern, responsive and SEO optimized business websites using React.
          </p>
<a href={resume} download>
  <button>Download Resume</button>
</a>

        </section>

        {/* ABOUT */}
<section id="about">
  <h2>About Me</h2>
  <p>
    I am a results-driven Full Stack Developer with expertise in building
    end-to-end web applications and business websites. I develop modern,
    user-friendly interfaces along with secure backend systems and database solutions.

    I provide freelance web development services for businesses, startups,
    and individuals, offering complete solutions including web development,
    application development, website maintenance, UI/UX improvements,
    and SEO optimization.
  </p>
</section>

{/* SKILLS */}
<section>
  <h2>Skills</h2>

  <div className="skills">
    {[
      "React",
      "JavaScript",
      "HTML",
      "CSS",
       "C++",
       "wordpress",
      "Responsive Design",
      "Node.js",
      "API Integration",
      "Database Handling",
      "SEO",
      "Google Analytics",
      "Performance Optimization",
      "Git",
      "UI/UX Design",
      "Web Development",
      "Application Development",
      "Website Maintenance",
      "Digital Marketing",
      "Poster Design",
      "Photography",
      "Videography",
      "Video Editing",
     

    ].map(skill => (
      <span key={skill} className="skill">{skill}</span>
    ))}
  </div>
</section>


        {/* FEATURED SERVICES */}
<section className="featured-services">
  <h2>⭐ Featured Services</h2>

  <div className="services-grid">

    <div className="service-card">
      <div className="service-icon">💻</div>
      <h3>Frontend Development</h3>
      <p>Interactive UI development using React, HTML, CSS and JavaScript.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">⚙️</div>
      <h3>Backend Development</h3>
      <p>Server-side logic, database integration and API development.</p>
    </div>


    <div className="service-card">
      <div className="service-icon">🔧</div>
      <h3>Website Maintenance</h3>
      <p>Website updates, bug fixes, performance improvement and support.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🚀</div>
      <h3>SEO Optimization</h3>
      <p>Improve search ranking, performance and website visibility.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">📱</div>
      <h3>Application Development</h3>
      <p>Custom web applications with modern technologies and clean UI.</p>
    </div>

    {/* NEW SERVICES */}

    <div className="service-card">
      <div className="service-icon">🎨</div>
      <h3>Poster Design</h3>
      <p>Creative poster and graphic design for branding and promotions.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">📸</div>
      <h3>Photography</h3>
      <p>Professional product and event photography services.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">🎥</div>
      <h3>Videography</h3>
      <p>High-quality video shooting for products, events and promotions.</p>
    </div>

    <div className="service-card">
      <div className="service-icon">✂️</div>
      <h3>Video Editing</h3>
      <p>Professional video editing and post-production services.</p>
    </div>

  </div>
</section>


        {/* EXPERIENCE */}
        <section>
          <h2>Experience</h2>

          <div className="project-card">
            <h3>Web Developer & Digital Marketing </h3>
            <p>
              Developed and maintained corporate websites including Sahara Labels,
              Sahara Tech and Sahara Opto GetMyCollege GetMySchool with modern UI and SEO optimization.
            </p>
          </div>
        </section>

      

        {/* PROJECTS */}
        <section id="projects">
          <h2>My Projects</h2>

          <div className="projects-grid">

            <div className="project-card">
              <img src={labels} alt="Sahara Labels Website" />
              <h3>Sahara Labels</h3>
              <p>Corporate manufacturing website with SEO optimization.</p>
              <a href="https://www.saharagroups.com/saharalabels/" target="_blank" rel="noreferrer">
                <button>View Website</button>
              </a>
            </div>

            <div className="project-card">
              <img src={tech} alt="Sahara Tech Website" />
              <h3>Sahara Tech</h3>
              <p>Engineering solutions website with responsive design.</p>
              <a href="https://www.saharagroups.com/saharatech/" target="_blank" rel="noreferrer">
                <button>View Website</button>
              </a>
            </div>

            <div className="project-card">
              <img src={opto} alt="Sahara Opto Website" />
              <h3>Sahara Opto</h3>
              <p>Corporate website for electronic solutions company.</p>
              <a href="https://www.saharaopto.com/" target="_blank" rel="noreferrer">
                <button>View Website</button>
              </a>
            </div>

 <div className="project-card">
              <img src={college} alt="Getmycollege" />
              <h3>GetMyCollege</h3>
              <p>  Education platform website developed with modern UI, responsive design
    and SEO optimization.</p>
              <a href="https://www.getmycollege.com/" target="_blank" rel="noreferrer">
                <button>View Website</button>
              </a>
            </div>

 <div className="project-card">
              <img src={school} alt="GetMySchool" />
              <h3>GetMySchool</h3>
              <p>  Education platform website with modern UI, responsive design
    and SEO optimization for School information services.</p>
              <a href="https://www.getmyschools.com/" target="_blank" rel="noreferrer">
                <button>View Website</button>
              </a>
            </div>

          </div>
        </section>

 {/* CONTACT */}
<section id="contact" className="contact">
  <h2>Contact</h2>

  <div className="contact-info">
    <p>📧 Email: pravalikaksagar33@gmail.com</p>

    <p>
      📞 Phone:
      <a href="tel:+918073497393"> +91 8073497393 </a>
    </p>
  </div>
</section>


        {/* FOOTER */}
        <footer className="footer">
          <p>© 2026 Prav Portfolio • Built with React</p>
        </footer>

      </div>
      {/* FLOATING WHATSAPP BUTTON — GLOBAL */}
<a
  href="https://wa.me/918073497393"
  target="_blank"
  rel="noreferrer"
  className="floating-whatsapp"
>
  <FaWhatsapp size={28} />
</a>

    </>
  )
}

export default App
