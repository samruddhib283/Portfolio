import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-indigo-600">Samruddhi Bobade</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-600 hover:text-indigo-500'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-indigo-600">Samruddhi Bobade</a>
            <button className="text-gray-600" onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center mt-20 space-y-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-xl capitalize text-gray-800 hover:text-indigo-600"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-4xl font-bold mb-4">
                Hi, I'm <span className="text-indigo-600">Samruddhi Bobade</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                Aspiring Software Developer
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                I craft intelligent and accessible web solutions with a focus on usability and impact.
Passionate about blending functionality with design, I build digital experiences that are not only efficient but also engaging — powered by AI, web development, and thoughtful code.


              </p>
              <div className="flex space-x-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  Contact Me
                </a>
                <a 
                  href="https://www.linkedin.com/in/samruddhi-bobade-9a6057248/" 
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition flex items-center"
                >
                  <Download size={18} className="mr-2" /> Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-200">
                  <img 
                  src='/SamruddhiBobadeProfile.jpg'
                  alt="Samruddhi Bobade" 
                  className="w-full h-full object-cover object-[center_20%]"
                  />

              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">

            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-bold text mb-8">🎓 Education</h3>
                <div className="space-y-4 text-lg mb-6 text-lg mb-6 dark:text-lg mb-6">
                  <div>
                      <p className="font-semibold">B.Tech in Computer Science and Engg.</p>
                      <p>Shree Siddheshwar women's college of engineering, Solapur</p>
                      <p>2023 – 2026 | CGPA: 8.53</p>
                  </div>
                  <div>
                      <p className="font-semibold">Diploma in Computer Engineering</p>
                      <p>Government Polytechnic, Pune</p>
                      <p>2020 – 2023 | Percentage: 83%</p>
            </div>
  </div>
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                As a Full Stack Developer and AI enthusiast, I build smart, scalable web applications that solve real-world problems.
With a blend of Python, Django, JavaScript, and OpenAI tools, I turn complex ideas into accessible digital experiences.
              </p>
              <p className="text-lg mb-6">
                My journey in software development began during college where I discovered my passion for creating
                digital solutions. Since then, I've worked with startups and established companies to deliver
                high-quality applications that solve real-world problems.
              </p>
              <p className="text-lg mb-8">
                When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new technologies.
                I'm always eager to learn and grow as a developer.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/samruddhib283/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <GitHub size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/samruddhi-bobade-9a6057248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FcPTAcGIQo64VNt1qGpjiA%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:samruddhib17@gmail.com" 
                  className="p-2 text-gray-600 hover:text-indigo-600 transition"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
  {
  title: "Frontend Development",
  skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "Responsive Design"]
},
{
  title: "Backend Development",
  skills: ["Python", "Django", "MySQL", "RESTful APIs", "Web Scraping"]
},
{
  title: "AI & Machine Learning",
  skills: ["OpenAI API", "AssemblyAI", "Resume Screening Models", "Basic ML Algorithms"]
},
{
  title: "Tools & Platforms",
  skills: ["VS Code", "PyCharm", "GitHub", "MySQL Workbench", "Linux", "Windows"]
},
{
  title: "Project Highlights",
  skills: ["GreenCart", "AI Blog Generator", "YojanaSetu"]
},
{
  title: "Soft Skills",
  skills: ["Problem Solving", "Communication", "Teamwork", "Adaptability"]
}
            ].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
  title: "GreenCart",
  description: "A smart e-commerce platform for fresh vegetables featuring mood-based meal kits, dynamic pricing, and farmer storytelling.",
  image: "https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  technologies: ["Django", "Python", "MySQL", "HTML", "CSS", "JavaScript"],
  liveLink: "https://your-demo-link.com",  // replace with real if available
  githubLink: "https://github.com/samruddhib283/GreenCart2.0"
},
              {
  title: "AI Blog Generator",
  description: "A web-based app that generates blog content from YouTube videos using AssemblyAI and OpenAI's ChatGPT.",
  image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  technologies: ["HTML", "CSS", "JavaScript", "Python", "OpenAI API", "AssemblyAI"],
  liveLink: "https://your-demo-link.com", // optional
  githubLink: "https://github.com/samruddhib283"
},

              {
  title: "YojanaSetu",
  description: "An AI-powered chatbot platform that helps users discover and apply for Indian government schemes, supported by video tutorials.",
  image: "https://images.pexels.com/photos/3184326/pexels-photo-3184326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  technologies: ["Django", "Python", "MySQL", "HTML", "CSS", "OpenAI API", "Web Scraping"],
  liveLink: "https://your-demo-link.com", // optional
  githubLink: "https://github.com/samruddhib283/Yojasetu"
},
              {
  title: "AI Resume Screener",
  description: "A machine learning-based resume screening and tracking tool developed during AICTE's TechSaksham internship.",
  image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  technologies: ["Python", "Machine Learning", "NLP", "Pandas", "Scikit-learn"],
  liveLink: "#",
  githubLink: "#" // Replace if hosted or uploaded
},
              {
  title: "Student Performance Predictor",
  description: "A machine learning model that predicts student academic performance based on study habits, attendance, and prior scores using linear regression.",
  image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
  liveLink: "#", // optional demo or notebook link
  githubLink: "https://github.com/samruddhib283" // update with exact repo if available
},
              {
                title: "Weather Application",
                description: "A weather forecasting application with location-based services and interactive maps.",
                image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                technologies: ["React", "OpenWeather API", "Leaflet", "Tailwind CSS"],
                liveLink: "https://example.com",
                githubLink: "https://github.com"
              }
            ].map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      <GitHub size={16} className="mr-1" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <Mail size={24} className="text-indigo-600 mb-2" />
                <h3 className="text-lg font-medium">Email</h3>
                <a href="mailto:samruddhib17@gmail.com" className="text-gray-600 hover:text-indigo-600">samruddhib17@gmail.com</a>
              </div>
              <div className="flex flex-col items-center">
                <Linkedin size={24} className="text-indigo-600 mb-2" />
                <h3 className="text-lg font-medium">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/samruddhi-bobade-9a6057248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FcPTAcGIQo64VNt1qGpjiA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">linkedin.com/in/samruddhi-bobade</a>
              </div>
              <div className="flex flex-col items-center">
                <GitHub size={24} className="text-indigo-600 mb-2" />
                <h3 className="text-lg font-medium">GitHub</h3>
                <a href="https://github.com/samruddhib283/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">github.com/samruddhib283</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#home" className="text-2xl font-bold text-white">Samruddhi Bobade</a>
              <p className="text-gray-400 mt-2">Student | Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/samruddhib283/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/samruddhi-bobade-9a6057248" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:john.samruddhib17@gmail.com" className="text-gray-400 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} samruddhibobade. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;