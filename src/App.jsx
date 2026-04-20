import labels from "./images/sahara-labels.jpg"
import tech from "./images/sahara-tech.jpg"
import opto from "./images/sahara-opto.jpg"
import college from "./images/getmycollege.jpg"
import school from "./images/getmyschool.jpg"
import "./App.css"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-inner">
          <h2 className="logo">Pravalik Portfolio</h2>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* MAIN */}
      <div className="container">

        {/* HERO */}
        <section className="hero">
          <h1>WEB & Digital Marketing 👋</h1>
          
          <p>
            I build modern, responsive and SEO optimized business websites using React.
          </p>

          {/* ✅ FIXED RESUME BUTTON */}
          <a href="/resume.pdf" download>
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
      "React", "JavaScript", "HTML", "CSS", "C++", "WordPress",
      "Responsive Design", "Node.js", "API Integration",
      "Database Handling", "SEO", "Google Analytics",
      "Meta Ads", "Google Ads", "Campaign Management",
      "Performance Optimization", "Git", "UI/UX Design",
      "Web Development", "Application Development",
      "Website Maintenance", "Digital Marketing",
      "Poster Design", "Photography", "Videography", "Video Editing"
    ].map(skill => (
      <span key={skill} className="skill">{skill}</span>
    ))}
  </div>
</section>

        {/* SERVICES */}
        <section className="featured-services">
          <h2>⭐ Featured Services</h2>

          <div className="services-grid">
            {[
              ["💻", "Frontend Development", "React, HTML, CSS and JavaScript"],
              ["⚙️", "Backend Development", "Server-side logic & APIs"],
              ["🔧", "Website Maintenance", "Updates & performance"],
              ["🚀", "SEO Optimization", "Improve rankings & visibility"],
              ["📱", "Application Development", "Modern web apps"],
              ["🎨", "Poster Design", "Creative branding design"],
              ["📸", "Photography", "Product & event shoots"],
              ["🎥", "Videography", "High-quality video shooting"],
              ["✂️", "Video Editing", "Professional editing"]
            ].map(([icon, title, desc]) => (
              <div className="service-card" key={title}>
                <div className="service-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2>Experience</h2>
          <div className="project-card">
            <h3>Web Developer & Digital Marketing</h3>
            <p>
              Developed and maintained corporate websites including Sahara Labels,
              Sahara Tech, Sahara Opto, GetMyCollege and GetMySchool with modern UI and SEO optimization.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>My Projects</h2>

          <div className="projects-grid">
            {[ 
              [labels, "Sahara Labels", "https://www.saharagroups.com/saharalabels/"],
              [tech, "Sahara Tech", "https://www.saharagroups.com/saharatech/"],
              [opto, "Sahara Opto", "https://www.saharaopto.com/"],
              [college, "GetMyCollege", "https://www.getmycollege.com/"],
              [school, "GetMySchool", "https://www.getmyschools.com/"]
            ].map(([img, title, link]) => (
              <div className="project-card" key={title}>
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>Modern responsive website with SEO optimization.</p>
                <a href={link} target="_blank" rel="noreferrer">
                  <button>View Website</button>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>📧 Email: pravalikaksagar33@gmail.com</p>
          <p>📞 <a href="tel:+918073497393">+91 8073497393</a></p>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2026 Prav Portfolio • Built with React</p>
        </footer>

      </div>

      {/* WHATSAPP */}
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