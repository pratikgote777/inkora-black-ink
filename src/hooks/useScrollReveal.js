import { useEffect } from 'react';

/**
 * Custom hook to activate scroll-triggered animations.
 * Observes all elements with .reveal, .reveal-fade, and .reveal-scale classes
 * and applies the .active class smoothly when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale').forEach((el) => {
        el.classList.add('active');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after revealing for optimal performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal:not(.active), .reveal-fade:not(.active), .reveal-scale:not(.active)');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();

    // Re-observe if new components render
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
