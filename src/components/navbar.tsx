import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 lg:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-shrink-0">
            <Sparkles size={32} color="#ff0b55"/>
            <a href="#" className="text-3xl font-bold text-primary font-logo">
              #1 Nails & Spa
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-700 hover:text-phover px-3 py-2 rounded-md text-lg font-medium transition-colors">Home</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-phover px-3 py-2 rounded-md text-lg font-medium transition-colors">Gallery</Link>
              <Link to="/services" className="text-gray-700 hover:text-phover px-3 py-2 rounded-md text-lg font-medium transition-colors">Services</Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <a href="/#booking">
              <button className="bg-primary text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-phover transition-colors">
                Book Appointment
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 lg:px-3 bg-gray-50">

          <Link to="/" className="text-gray-700 hover:text-phover block px-3 py-2 rounded-md text-base font-medium transition-colors">Home</Link>
          <Link to="/gallery" className="text-gray-700 hover:text-phover block px-3 py-2 rounded-md text-base font-medium transition-colors">Gallery</Link>
          <Link to="/services" className="text-gray-700 hover:text-phover block px-3 py-2 rounded-md text-base font-medium transition-colors">Services</Link>





          <div className="pt-2">
            <a href="/#booking">
              <button className="w-full bg-primary text-white px-4 py-2 rounded-md text-base font-medium hover:bg-phover transition-colors">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}