import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import drGreenLogo from '@/assets/logo-new.svg';

// External marketplace URL
const MARKETPLACE_URL = 'https://marketplace.drgreennft.com';

type NavItem = {
  label: string;
  path: string;
  external?: boolean;
  dropdown?: NavItem[];
};

const navItems: NavItem[] = [
  { label: 'HOME', path: '/' },
  { 
    label: 'ABOUT', 
    path: '/about-us',
    dropdown: [
      { label: 'About Us', path: '/about-us' },
      { label: 'Our Story', path: '/our-story' },
      { label: 'Our Strains', path: '/our-strains' },
    ]
  },
  { 
    label: 'DIGITAL KEYS', 
    path: '/digital-keys',
    dropdown: [
      { label: 'Digital Keys', path: '/digital-keys' },
      { label: 'Universe', path: '/universe' },
      { label: 'NFTs', path: '/nfts' },
      { label: 'Planets', path: `${MARKETPLACE_URL}/planets`, external: true },
      { label: 'Marketplace', path: `${MARKETPLACE_URL}/marketplace`, external: true },
    ]
  },
  { 
    label: 'STAY INFORMED', 
    path: '/news',
    dropdown: [
      { label: 'News', path: '/news' },
      { label: 'Whitepaper', path: '/whitepaper' },
      { label: 'Webinars', path: '/webinars' },
    ]
  },
  { 
    label: 'GET INVOLVED', 
    path: '/the-process',
    dropdown: [
      { label: 'The Process', path: '/the-process' },
      { label: 'Contact', path: '/contact' },
      { label: 'Mint Key', path: MARKETPLACE_URL, external: true },
    ]
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Solid background after scroll
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`header transition-all duration-500 ${
          isScrolled ? 'header-solid' : 'header-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={drGreenLogo} alt="Dr. Green Digital Key" className="h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative dropdown group">
                  <Link 
                    to={item.path}
                    className="nav-link flex items-center gap-1 py-2"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                  </Link>
                  
                  {item.dropdown && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((subItem) => (
                        subItem.external ? (
                          <a
                            key={subItem.path}
                            href={subItem.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="dropdown-item"
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="dropdown-item"
                          >
                            {subItem.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button - External marketplace link */}
            <div className="hidden lg:block">
              <a 
                href={MARKETPLACE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-mint"
              >
                Mint Key
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="container mx-auto px-4 pt-24 pb-8">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link 
                  to={item.path}
                  className="text-2xl font-display text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.dropdown.map((subItem) => (
                      subItem.external ? (
                        <a
                          key={subItem.path}
                          href={subItem.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-foreground/60 hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ) : (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="text-lg text-foreground/60 hover:text-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-8">
            <a 
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mint Key
            </a>
          </div>
        </div>
      </div>

      {/* Side CTA - Book Webinar */}
      <div className="side-cta hidden lg:block">
        <Link 
          to="/webinars"
          className="bg-primary text-primary-foreground px-4 py-3 text-xs tracking-widest uppercase font-medium hover:bg-primary/90 transition-colors"
        >
          Book Webinar
        </Link>
      </div>
    </>
  );
};

export default Header;
