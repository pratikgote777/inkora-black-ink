import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#181A22] text-[#E2E8F0] border border-[#2F323F] shadow-editorial-lg hover:bg-white hover:text-[#090A0C] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
      aria-label="Back to top"
    >
      <ArrowUp className="w-4 h-4 stroke-[2.25]" />
    </button>
  );
}
