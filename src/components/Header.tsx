
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      {/* Top Bar */}
      <div className="bg-emerald-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-2" />
                <span>+91 96108 35660</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 mr-2" />
                <span>ceo@durgafibers.com</span>
              </div>
            </div>
            <div className="flex items-center">
              <Globe className="h-3 w-3 mr-2" />
              <span>IEC: IVXPS3590H</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border">
                <img 
                  src="/lovable-uploads/78a87c1c-8d5b-49b5-8a0e-5dc5e3be8a9f.png" 
                  alt="Durga Fibers Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Durga Fibers</h1>
                <p className="text-xs text-gray-600">Connecting Farms to World</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
              <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Get Quote
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-emerald-600 transition-colors">Products</a>
                <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
