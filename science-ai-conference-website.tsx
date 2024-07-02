import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, MapPin, Users, Zap } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'speakers', 'schedule', 'register'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - windowHeight / 2 && 
              scrollPosition < offsetTop + offsetHeight - windowHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-80 backdrop-blur-md z-50">
        <ul className="flex justify-center space-x-4 p-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`text-lg uppercase ${
                  activeSection === section ? 'text-neon-green' : 'text-white'
                } hover:text-neon-blue transition-colors`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section id="home" className="h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 text-neon-pink">Science and AI Conference</h1>
          <p className="text-2xl mb-8 text-neon-blue">Making AI Work for Science</p>
          <button onClick={() => scrollToSection('register')} className="bg-neon-green text-gray-900 px-8 py-3 rounded-full text-xl font-semibold hover:bg-neon-blue transition-colors">
            Register Now
          </button>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown size={40} className="text-neon-yellow" />
        </motion.div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-8 text-neon-orange">About the Conference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Calendar size={60} className="text-neon-pink mb-4" />
              <h3 className="text-2xl font-semibold mb-2">July 31st, 2024</h3>
              <p>Join us for a day of innovation and discovery</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin size={60} className="text-neon-blue mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Brighthampton University</h3>
              <p>Hosted at the forefront of scientific research</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users size={60} className="text-neon-green mb-4" />
              <h3 className="text-2xl font-semibold mb-2">World-class Speakers</h3>
              <p>Learn from leaders in AI and scientific research</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="speakers" className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-8 text-neon-yellow">Featured Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <img src={`/api/placeholder/200/200`} alt={`Speaker ${i}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-neon-pink">Dr. Jane Doe</h3>
                <p className="text-neon-blue mb-2">AI Ethics Researcher</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="schedule" className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-8 text-neon-green">Conference Schedule</h2>
          <div className="space-y-6">
            {['Morning Sessions', 'Lunch Break', 'Afternoon Sessions', 'Closing Keynote'].map((session, index) => (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                <h3 className="text-2xl font-semibold mb-2 text-neon-orange">{session}</h3>
                <p className="text-neon-blue">9:00 AM - 10:30 AM</p>
                <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="register" className="min-h-screen flex items-center justify-center py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-neon-pink">Register Now</h2>
          <p className="text-xl mb-8">Don't miss this opportunity to be at the forefront of AI in science!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neon-green text-gray-900 px-8 py-3 rounded-full text-xl font-semibold hover:bg-neon-blue transition-colors"
          >
            Sign Up for the Conference
          </motion.button>
        </motion.div>
      </section>

      <footer className="bg-gray-800 text-center py-8">
        <p>&copy; 2024 Science and AI Conference. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
