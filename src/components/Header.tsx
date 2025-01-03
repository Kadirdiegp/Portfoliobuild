import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Link } from 'react-scroll';
import NavLinks from './NavLinks';
import logo from '../assets/LOGO RODRIGUEZ_.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-dark-100/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer"
          >
            <img src={logo} alt="Rodriguez Logo" className="h-12 w-auto" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-light-900" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-dark-200/95 mt-2 rounded-lg"
            >
              <div className="py-2">
                <NavLinks mobile setIsOpen={setIsOpen} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;