import React from 'react';
import { Building2, Users, Trophy, ArrowRight, Phone, Mail, MapPin, Briefcase, CheckCircle, Clock, DollarSign, HardHat, Ruler, User } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Navigation Component
const Navigation = () => (
  <nav className="fixed w-full bg-construction-gray-dark bg-opacity-90 text-white z-50 px-4 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold flex items-center gap-2">
        <HardHat className="text-construction-orange" />
        PowerBuild
      </Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-construction-orange transition-colors">Home</Link>
        <Link to="/projects" className="hover:text-construction-orange transition-colors">Projects</Link>
        <Link to="/contact" className="hover:text-construction-orange transition-colors">Contact</Link>
      </div>
    </div>
  </nav>
);

// Home Page Component
const Home = () => (
  <div>
    {/* Hero Section */}
    <div 
      className="h-screen relative bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80")'
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          PowerBuild
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-4 animate-fade-in">
          Building Tomorrow's Commercial Spaces with Excellence and Innovation
        </p>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-8 animate-fade-in delay-200">
          Specializing in Office Buildings, Shopping Centers, and Industrial Complexes
        </p>
        <Link to="/contact" className="mt-8 bg-construction-orange hover:bg-opacity-90 text-white px-8 py-3 rounded-full flex items-center gap-2 transform transition hover:scale-105 animate-fade-in">
          Start Your Project <ArrowRight size={20} />
        </Link>
      </div>
    </div>

    {/* Stats Section */}
    <div className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 text-center">
        {[
          { number: "150+", label: "Projects Completed", icon: <Briefcase className="text-construction-orange" /> },
          { number: "25+", label: "Years Experience", icon: <Clock className="text-construction-orange" /> },
          { number: "98%", label: "Client Satisfaction", icon: <CheckCircle className="text-construction-orange" /> },
          { number: "$500M+", label: "Project Value", icon: <DollarSign className="text-construction-orange" /> },
          { number: "1K+", label: "Workers", icon: <User className="text-construction-orange" /> }
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {stat.icon}
            <h3 className="text-3xl font-bold text-construction-gray-dark mt-4">{stat.number}</h3>
            <p className="text-construction-gray">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Services Section */}
    <div className="py-20 px-4 md:px-8 bg-construction-gray-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-construction-gray-dark text-center mb-16">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Building2 size={40} />,
              title: "Commercial Construction",
              description: "State-of-the-art office buildings, retail spaces, and industrial facilities built to exceed expectations"
            },
            {
              icon: <Users size={40} />,
              title: "Project Management",
              description: "Expert coordination and execution of complex construction projects with precision timing"
            },
            {
              icon: <Trophy size={40} />,
              title: "Quality Assurance",
              description: "Rigorous quality control and safety standards in every project we undertake"
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="text-construction-orange mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-construction-gray-dark mb-3">
                {service.title}
              </h3>
              <p className="text-construction-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Projects Page Component
const Projects = () => (
  <div className="pt-16 min-h-screen bg-construction-gray-light">
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-construction-gray-dark mb-12 text-center">Our Featured Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Skyline Office Tower",
            description: "A 25-story modern office building with LEED certification",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
            details: "Completed in 2023 • $85M • 18 months",
            features: ["Smart Building Technology", "Green Roof", "Underground Parking"]
          },
          {
            title: "Metro Shopping Complex",
            description: "Contemporary retail space with 50+ premium stores",
            image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?auto=format&fit=crop&q=80",
            details: "Completed in 2022 • $65M • 24 months",
            features: ["Food Court", "Entertainment Center", "Outdoor Plaza"]
          },
          {
            title: "Innovation Industrial Park",
            description: "State-of-the-art manufacturing and warehouse facility",
            image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80",
            details: "Completed in 2024 • $45M • 12 months",
            features: ["Smart Logistics", "Solar Powered", "Advanced Security"]
          },
          {
            title: "Riverside Medical Center",
            description: "Modern healthcare facility with specialized units",
            image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80",
            details: "Completed in 2023 • $95M • 30 months",
            features: ["Healing Gardens", "Advanced Medical Equipment", "Emergency Department"]
          }
        ].map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-construction-gray-dark mb-2">{project.title}</h3>
              <p className="text-construction-gray mb-4">{project.description}</p>
              <p className="text-sm text-construction-orange mb-4">{project.details}</p>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature, i) => (
                  <span key={i} className="bg-construction-gray-light text-construction-gray-dark px-3 py-1 rounded-full text-sm">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Contact Page Component
const Contact = () => (
  <div className="pt-16 min-h-screen bg-construction-gray-light">
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-construction-gray-dark mb-6">Let's Build Together</h1>
          <p className="text-construction-gray mb-8">
            Ready to start your next commercial construction project? Our team of experts is here to help bring your vision to life.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-construction-orange" />
              <div>
                <h3 className="font-bold text-construction-gray-dark">Call Us</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-construction-orange" />
              <div>
                <h3 className="font-bold text-construction-gray-dark">Email Us</h3>
                <p>contact@powerbuild.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-construction-orange" />
              <div>
                <h3 className="font-bold text-construction-gray-dark">Visit Us</h3>
                <p>123 Construction Ave, City, State</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-construction-gray-dark mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-construction-orange"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-construction-gray-dark mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-construction-orange"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-construction-gray-dark mb-2" htmlFor="project">Project Type</label>
              <select
                id="project"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-construction-orange"
              >
                <option>Office Building</option>
                <option>Retail Space</option>
                <option>Industrial Facility</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-construction-gray-dark mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-construction-orange"
                placeholder="Tell us about your project"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-construction-orange hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-construction-gray-light">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-construction-gray-dark text-white py-8 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HardHat className="text-construction-orange" />
                <span className="text-xl font-bold">PowerBuild</span>
              </div>
              <p className="text-gray-400">
                Building excellence in commercial construction since 1998.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-construction-orange">Home</Link>
                <Link to="/projects" className="block text-gray-400 hover:text-construction-orange">Projects</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-construction-orange">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>123 Construction Ave</p>
                <p>City, State 12345</p>
                <p>(555) 123-4567</p>
                <p>contact@powerbuild.com</p>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 PowerBuild. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;