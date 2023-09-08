import { RefObject, useEffect } from 'react';

/**
 * Invokes function on click outside the element.
 */
function useClickOutside(anchorEl: RefObject<HTMLElement>, callback: VoidFunction): void {
  useEffect(() => {
    const clickListener = ({ target }: MouseEvent) => {
      if (!anchorEl.current?.contains(target as Node)) {
        if (typeof callback === 'function') {
          callback();
        }
      }
    };

    if (typeof document !== 'undefined' && anchorEl) {
      document.addEventListener('mousedown', clickListener);

      return () => {
        document.removeEventListener('mousedown', clickListener);
      };
    }

    return void 0;
  }, [anchorEl, callback]);
}

export default useClickOutside;
