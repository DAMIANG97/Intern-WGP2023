import React from 'react';

import toMatchStructure from '@jest/utils/toMatchStructure';

import '@testing-library/jest-dom';

global.React = React;

// Fix memory leaks in Jest
afterAll(() => {
  if (typeof global.gc === 'function') {
    global.gc();
  }
});

expect.extend({ toMatchStructure });

// Fix error related to Chakra
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// IntersectionObserver is not defined in Jest environment.
window.IntersectionObserver = jest.fn(() => ({
  unobserve: jest.fn(),
  observe: jest.fn(),
  disconnect: jest.fn(),
})) as unknown as (typeof window)['IntersectionObserver'];
