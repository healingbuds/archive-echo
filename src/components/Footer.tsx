import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const pageLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT US', path: '/about-us' },
  { label: 'PROCESS', path: '/process' },
  { label: 'NEWS', path: '/news' },
  { label: 'CONTACT', path: '/contact' },
  { label: 'TERMS & CONDITIONS', path: '/terms' },
  { label: 'PRIVACY POLICY', path: '/privacy' },
  { label: 'COOKIE POLICY', path: '/cookies' },
];

const Footer = () => {
  return (
    <footer className="footer py-16 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="logo-script text-4xl md:text-5xl">Dr. Green</span>
            <span className="text-[10px] tracking-[0.4em] text-foreground/50 uppercase mt-1">
              Digital Key
            </span>
          </div>

          {/* Pages */}
          <div className="text-center md:text-left">
            <h4 className="text-xs tracking-[0.3em] text-foreground/50 uppercase mb-6">Pages</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start">
              {pageLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs tracking-wider text-foreground/80 hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start mt-4">
              {pageLinks.slice(5).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs tracking-wider text-foreground/80 hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="text-center md:text-right">
            <h4 className="text-xs tracking-[0.3em] text-foreground/50 uppercase mb-6">Socials</h4>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              <a 
                href="https://facebook.com/DrGreenNFT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com/DrGreenNFT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/DrGreenNFT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/DrGreenNFT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end mt-4">
              <a 
                href="https://discord.gg/DrGreen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                </svg>
              </a>
              <a 
                href="https://opensea.io/collection/drgreen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 01.187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 01-.117.199.106.106 0 01-.09.045H6.013a.106.106 0 01-.091-.163zm13.914 1.68a.109.109 0 01-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 01-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 01-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 00.065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.351a3.415 3.415 0 00-.055-.327 6.32 6.32 0 00-.118-.543l-.016-.064c-.029-.108-.057-.211-.091-.319-.117-.401-.266-.78-.412-1.12a4.482 4.482 0 00-.137-.297c-.063-.126-.13-.247-.191-.365a2.892 2.892 0 01-.091-.166c-.03-.055-.063-.107-.094-.16l-.268-.453a.07.07 0 01.082-.104l1.295.437h.003l.171.055.188.062.068.022v-.966c0-.359.147-.687.382-.924a1.248 1.248 0 01.912-.378c.359 0 .68.143.912.378.235.237.382.565.382.924v1.432l.137.045s.011.003.016.008a.67.67 0 01.079.056c.024.02.059.048.103.081.048.038.105.086.172.142.048.041.1.086.155.134a7.518 7.518 0 01.484.456c.116.115.237.243.352.379.039.046.077.09.117.14.039.049.082.097.12.149.048.064.1.129.147.198.025.038.052.075.078.116.048.074.098.149.143.229.019.037.043.074.062.113.029.059.058.117.084.178.027.06.051.117.074.177.025.063.048.126.068.19a1.2 1.2 0 01.044.158c.038.159.056.323.059.485.003.067.003.135-.003.205 0 .073-.004.143-.013.217-.008.072-.02.148-.032.223a1.97 1.97 0 01-.063.218c-.038.116-.084.235-.14.357-.017.044-.039.086-.058.131a1.97 1.97 0 01-.182.299c-.019.03-.039.063-.063.093l-.01.012c-.016.024-.036.049-.052.073a4.68 4.68 0 01-.354.395l-.097.093a2.72 2.72 0 01-.109.096c-.036.033-.075.065-.114.097-.046.038-.091.076-.14.113l-.171.125-.176.115h-.002l-.142.091a.106.106 0 01-.057.017h-1.247v1.347h1.577c.264 0 .517-.093.72-.254.055-.044.487-.401.98-.927a.108.108 0 01.051-.032l3.572-1.036a.107.107 0 01.136.101z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40 tracking-wider">
            2024 © DR. GREEN NFT
          </p>
          <p className="text-xs text-foreground/40 tracking-wider">
            WEBSITE DESIGNED AND DEVELOPED BY{' '}
            <a href="https://surgemarketing.co" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary">
              SURGE
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
