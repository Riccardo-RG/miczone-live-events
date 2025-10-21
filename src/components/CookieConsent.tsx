import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookie-consent-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-accepted', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-miczone-black/95 backdrop-blur-md border-t border-miczone-gray animate-fade-in">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 text-center md:text-left">
          <p>
            This website only uses strictly necessary cookies to enhance your experience. 
            We don't track you or collect personal data without your explicit consent.
          </p>
          <p className="mt-1">
            <a href="/privacy-policy" className="text-miczone-accent hover:underline">
              Learn more in our Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="btn-primary text-sm px-4 py-2 whitespace-nowrap"
          >
            Accept
          </button>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white p-1 rounded-full"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
