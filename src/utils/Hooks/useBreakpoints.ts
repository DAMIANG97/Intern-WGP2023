import { useCallback, useEffect, useState } from 'react';

import debounce from 'lodash.debounce';

export type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop' | 'wide';

const breakpoints = {
  mobile: { maxWidth: 480 },
  tablet: { maxWidth: 720, minWidth: 480 },
  laptop: { maxWidth: 960, minWidth: 720 },
  desktop: { maxWidth: 1200, minWidth: 960 },
  wide: { minWidth: 1200 },
};

function useBreakpoints() {
  const [activeBreakpoint, setActiveBreakpoint] = useState<Breakpoint>('mobile');
  function getWidth() {
    const innerWidth = window.innerWidth;
    return innerWidth;
  }

  const checkActive = useCallback((width: number) => {
    switch (true) {
      case width < breakpoints.mobile.maxWidth:
        setActiveBreakpoint('mobile');
        break;
      case width > breakpoints.tablet.minWidth && width < breakpoints.tablet.maxWidth:
        setActiveBreakpoint('tablet');
        break;
      case width > breakpoints.laptop.minWidth && width < breakpoints.laptop.maxWidth:
        setActiveBreakpoint('laptop');
        break;
      case width > breakpoints.desktop.minWidth && width < breakpoints.desktop.minWidth:
        setActiveBreakpoint('desktop');
        break;
      case width > breakpoints.wide.minWidth:
        setActiveBreakpoint('wide');
        break;
      default:
        setActiveBreakpoint('mobile');
    }
  }, []);

  const handleResize = debounce(
    () => {
      checkActive(getWidth());
    },
    500,
    { leading: true },
  );

  useEffect(() => {
    const width = getWidth();
    checkActive(width);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [checkActive, handleResize]);
  return activeBreakpoint;
}

export default useBreakpoints;
