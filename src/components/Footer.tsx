import { Link } from 'react-router-dom';

// Archive assets
import logoNew from '@/assets/logo-new.svg';
import voodooLogo from '@/assets/voodoo-logo.png';
import socialFacebook from '@/assets/social-facebook.svg';
import socialX from '@/assets/social-x.svg';
import socialInstagram from '@/assets/social-instagram.svg';
import socialLinkedin from '@/assets/social-linkedin.svg';
import socialYoutube from '@/assets/social-youtube.svg';
import socialDiscord from '@/assets/social-discord.svg';
import socialOpensea from '@/assets/social-opensea.svg';
import socialPinterest from '@/assets/social-pinterest.svg';
import socialTelegram from '@/assets/social-telegram.svg';

const pageLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Process', path: '/the-process' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
  { label: 'Terms & Conditions', path: '/terms-conditions' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
];

const socialLinks = [
  { icon: socialFacebook, href: 'https://www.facebook.com/drgreennftportugal', alt: 'Facebook' },
  { icon: socialX, href: 'https://twitter.com/DrGreen_nft', alt: 'X (Twitter)' },
  { icon: socialInstagram, href: 'https://www.instagram.com/drgreen', alt: 'Instagram' },
  { icon: socialLinkedin, href: 'https://www.linkedin.com/company/drgreennft', alt: 'LinkedIn' },
  { icon: socialYoutube, href: 'https://www.youtube.com/@DrGreen_NFT', alt: 'YouTube' },
  { icon: socialDiscord, href: 'https://discord.gg/DrGreen', alt: 'Discord' },
  { icon: socialOpensea, href: 'https://opensea.io/collection/dr-green-digital-key', alt: 'OpenSea' },
  { icon: socialPinterest, href: 'https://www.pinterest.co.uk/DrGreenNFT', alt: 'Pinterest' },
  { icon: socialTelegram, href: 'https://t.me/DrGreenNFTentry', alt: 'Telegram' },
];

const Footer = () => {
  return (
    <footer className="bg-black py-10 sm:py-12 md:py-16 relative z-10 border-t border-border/10">
      {/* Top Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src={logoNew} 
                alt="Dr. Green" 
                className="h-14 sm:h-16 md:h-[74px] w-auto"
                width={190}
                height={75}
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24 flex-1">
            {/* Pages */}
            <div className="footer-nav">
              <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-4">Pages</p>
              <div className="flex flex-col gap-2">
                {pageLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="socials">
              <p className="text-xs tracking-[0.2em] text-foreground/50 uppercase mb-4">Socials</p>
              <div className="flex items-center gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.alt}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.alt}
                      className="w-[17px] h-[17px] object-contain"
                      loading="lazy"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-border/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            2024 © Dr. Green NFT
          </p>

          <div className="voodoo-logo-container flex items-center text-xs text-foreground/40 cursor-pointer">
            <p>Website designed and developed by</p>
            <span className="opacity-60 hover:opacity-100 transition-all duration-300">
              <img 
                src={voodooLogo} 
                alt="Voodoo" 
                className="voodoo-logo h-16 w-auto transition-all duration-300"
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
