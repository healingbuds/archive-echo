import { Link } from 'react-router-dom';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Our Story', path: '/our-story' },
  { label: 'Digital Keys', path: '/digital-keys' },
  { label: 'Our Strains', path: '/our-strains' },
  { label: 'Universe', path: '/universe' },
  { label: 'NFTs', path: '/nfts' },
  { label: 'Process', path: '/process' },
  { label: 'Whitepaper', path: '/whitepaper' },
  { label: 'Webinars', path: '/webinars' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

const socialLinks = [
  { label: 'Twitter', url: 'https://twitter.com/DrGreenNFT' },
  { label: 'Discord', url: 'https://discord.gg/DrGreen' },
  { label: 'Telegram', url: 'https://t.me/DrGreenNFTentry' },
  { label: 'Instagram', url: 'https://instagram.com/DrGreenNFT' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 md:px-8">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Join the <span className="text-primary">Revolution</span>.
          </h3>
          <p className="text-foreground/60 mb-8 max-w-2xl mx-auto">
            Be part of the future of cannabis trading with Dr. Green Digital Key.
          </p>
          <Link to="/digital-keys" className="btn-primary">
            Mint Your Key
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-foreground/50 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="logo-script text-2xl">Dr. Green</span>
            <span className="text-[8px] tracking-[0.3em] text-foreground/40 uppercase">
              Digital Key
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground/50 hover:text-primary transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-foreground/30">
            © 2024 Dr. Green. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
