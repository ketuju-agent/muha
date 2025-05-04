import '@testing-library/jest-dom';

// Polyfill matchMedia for Embla Carousel
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = function () {
    return {
      matches: false,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
      onchange: null,
      media: '',
    };
  };
}

// Polyfill IntersectionObserver for Embla Carousel
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  }
  // @ts-ignore
  window.IntersectionObserver = IntersectionObserver;
}

// Mock ResizeObserver for jsdom
if (typeof window !== 'undefined' && !('ResizeObserver' in window)) {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  // @ts-ignore
  window.ResizeObserver = ResizeObserver;
}
