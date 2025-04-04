
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="arc-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/lovable-uploads/2a652c1a-4658-4b3e-8fb5-c57d367f400b.png" alt="Arc Scale Logo" className="h-10" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-arcgreen hover:text-arcgreen-light font-medium">Services</a>
            <a href="#clients" className="text-arcgreen hover:text-arcgreen-light font-medium">Clients</a>
            <a href="#about" className="text-arcgreen hover:text-arcgreen-light font-medium">About</a>
            <Button className="cta-button">Book a Call</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-arcgreen p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-arcgreen hover:text-arcgreen-light font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#clients" 
                className="text-arcgreen hover:text-arcgreen-light font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Clients
              </a>
              <a 
                href="#about" 
                className="text-arcgreen hover:text-arcgreen-light font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <Button className="cta-button w-full">Book a Call</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
