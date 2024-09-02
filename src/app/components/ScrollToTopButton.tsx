"use client"
import { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
        const heroElement = document.getElementById('hero');
        if (heroElement) {
          const heroHeight = heroElement.clientHeight;
          if (window.scrollY > heroHeight) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-16 right-20 bg-primary text-black px-3 py-2 rounded-full transition-shadow duration-300 ease-in-out hover:shadow-glow hover:shadow-blue-300"
      >
        <span className="material-symbols-outlined">&#xe5d8;</span>
      </button>
    )
  );
};

export default ScrollToTopButton;