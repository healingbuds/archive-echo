import { Link } from 'react-router-dom';

const BookWebinarButton = () => {
  return (
    <Link
      to="/webinars"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground px-3 py-6 rounded-l-lg flex flex-col items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      <span className="text-xs font-medium tracking-wider uppercase">Book Webinar</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    </Link>
  );
};

export default BookWebinarButton;
