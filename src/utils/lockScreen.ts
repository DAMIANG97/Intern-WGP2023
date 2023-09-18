/* eslint-disable no-console */
/**
 * This is the module version of storefront/application/src/main/resources/frontend/scripts/lockscreen.ts
 */
const lockScreen = (() => {
  if (typeof document === 'undefined') {
    return {
      lock: () => console.info('LockScreen.lock is mocked during server side rendering.'),
      unlock: () => console.info('LockScreen.unlock is mocked during server side rendering.'),
    };
  }

  const htmlElement = document.documentElement;
  const bodyElement = document.body;
  let scrollTop = 0;
  let isLocked = false;

  const lock = (): void => {
    if (isLocked) {
      return;
    }
    const windowHeight = window.innerHeight;
    scrollTop = window.scrollY;
    isLocked = true;
    htmlElement.style.height = `${windowHeight}px`;
    htmlElement.style.overflow = 'hidden';
    bodyElement.style.height = `${windowHeight + scrollTop}px`;
    bodyElement.style.overflow = 'hidden';
    bodyElement.style.marginTop = `-${scrollTop}px`;
  };

  const unlock = (): void => {
    if (!isLocked) {
      return;
    }

    htmlElement.removeAttribute('style');
    bodyElement.removeAttribute('style');
    isLocked = false;
    setTimeout(() => {
      window.scrollTo(0, scrollTop);
    }, 0);
  };

  return {
    lock,
    unlock,
  };
})();

export { lockScreen };
