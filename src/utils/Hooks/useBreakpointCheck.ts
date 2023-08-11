import { useEffect, useState } from 'react';

import debounce from 'lodash.debounce';

function useBreakpointCheck() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = debounce(
      () => {
        const isDesktop = window.matchMedia('(min-width: 740px)').matches;
        setIsDesktop(isDesktop);
      },
      500,
      { leading: true },
    );
    const resizeObserver = new ResizeObserver(handleResize);

    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.disconnect();
      handleResize.cancel();
    };
  }, []);
  return isDesktop;
}
export default useBreakpointCheck;
