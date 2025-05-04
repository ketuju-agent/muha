import '@testing-library/jest-dom';

// Mock IntersectionObserver for Jest
type ObserverCallback = IntersectionObserverCallback;

global.IntersectionObserver = class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  constructor(
    public callback: ObserverCallback,
    public options?: IntersectionObserverInit
  ) {}
  disconnect(): void {}
  observe(): void {}
  unobserve(): void {}
  takeRecords(): IntersectionObserverEntry[] { return []; }
};