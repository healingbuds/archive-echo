import { Link } from 'react-router-dom';

// Archive assets
import logoNew from '@/assets/logo-new.svg';
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
  { label: 'Process', path: '/process' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Cookie Policy', path: '/cookies' },
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

          <div className="flex items-center gap-2 text-xs text-foreground/40">
            <p>Website designed and developed by</p>
            <a 
              href="https://surge-online.co.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <svg 
                aria-labelledby="surge-logo" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg" 
                width="91" 
                height="23" 
                viewBox="0 0 91.181 22.827"
                className="fill-current"
              >
                <title id="surge-logo">Surge, a full service digital agency</title>
                <path d="M1514.1,456.843v-2.977a1.29,1.29,0,0,0-1.29-1.29h-7.477a1.29,1.29,0,0,1-1.29-1.29v-.232a1.29,1.29,0,0,1,1.29-1.29h7.245a1.29,1.29,0,0,0,1.29-1.29V445.5a1.29,1.29,0,0,0-1.29-1.29h-7.172a1.34,1.34,0,0,1-1.362-1.221,1.29,1.29,0,0,1,1.288-1.36h7.477a1.29,1.29,0,0,0,1.29-1.29v-2.977a1.29,1.29,0,0,0-1.29-1.29h-14.159a1.291,1.291,0,0,0-1.291,1.29v2.723a1.545,1.545,0,0,0-.263-.517,10.558,10.558,0,0,0-8.666-3.859,12.166,12.166,0,0,0-10.134,4.8c-1.074-2.6-3.564-4.432-7.332-4.432h-4.791a1.382,1.382,0,0,0-.72,2.56l5.085,3.107c1.675,1,1.675,2.663,0,3.666l-7.87,4.785a.813.813,0,0,1-1.236-.7V437.473a1.406,1.406,0,0,0-1.405-1.405h-3.971a1.405,1.405,0,0,0-1.405,1.406v11.364a3.821,3.821,0,0,1-7.642,0V437.473a1.406,1.406,0,0,0-1.406-1.406h-3.971a1.405,1.405,0,0,0-1.405,1.405v.338a15.127,15.127,0,0,0-7.936-2.074c-6.055,0-9.164,3.407-9.164,7.146,0,5.525,5.558,6.385,9.2,7.046,2.184.4,3.11.827,3.11,1.687s-1.192,1.29-2.448,1.29a10.284,10.284,0,0,1-5.945-1.883,1.48,1.48,0,0,0-2.077.337l-1.777,2.539a1.471,1.471,0,0,0,.348,2.04,15.125,15.125,0,0,0,9.12,2.592c4.391,0,7.505-1.55,8.823-4.333,1.541,2.655,4.559,4.333,9.368,4.333,3.914,0,6.639-1.107,8.343-2.954v1.1a1.459,1.459,0,0,0,1.457,1.457h3.752a1.477,1.477,0,0,0,1.477-1.477v-4.147a1.459,1.459,0,0,1,1.59-1.451,1.534,1.534,0,0,1,1.234.953l2.252,5.232a1.471,1.471,0,0,0,1.351.889h4.256a1.456,1.456,0,0,0,1.3-2.119l-2.3-4.488a1.45,1.45,0,0,1,.433-1.835c.165-.12.33-.252.492-.394,1.006,5.754,5.99,9.233,11.953,9.233a13.026,13.026,0,0,0,8.929-3.317v1.63a1.291,1.291,0,0,0,1.291,1.29h14.159A1.29,1.29,0,0,0,1514.1,456.843Zm-80.951-12.77c-2.348-.4-3.242-.695-3.242-1.555,0-.562.364-1.158,2.018-1.158a10.84,10.84,0,0,1,5.1,1.488,1.452,1.452,0,0,0,1.877-.4l1.32-1.747v5.889C1438.329,445.017,1435.406,444.463,1433.154,444.073Zm63.824,1.125h-7.655a1.548,1.548,0,0,0-1.548,1.548v2.4a1.548,1.548,0,0,0,1.548,1.548h2.1a.622.622,0,0,1,.623.623.634.634,0,0,1-.32.546,6.646,6.646,0,0,1-3.286.784,5.528,5.528,0,0,1,0-11.05,4.561,4.561,0,0,1,3.392,1.465,1.53,1.53,0,0,0,1.823.364l2.947-1.508a1.53,1.53,0,0,0,.768-.93v4.27A1.54,1.54,0,0,0,1496.978,445.2Z" transform="translate(-1422.924 -435.704)" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
