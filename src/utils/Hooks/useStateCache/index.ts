import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

const COOKIE_PREFIX = 'wgp2023';

type StorageType = keyof WindowLocalStorage | keyof WindowSessionStorage;

const getStorageType = (storageType: StorageType): Storage =>
  storageType === 'localStorage' ? localStorage : sessionStorage;

/**
 * Hook for values cached in storage (local or session). It does two things:
 * 1. On first component load checks if value is available in localStorage
 * 2. When value is changed, ensures it is also set to localStorage
 *
 * @example
 * ```ts
 * const [cachedValue, setCachedValue] = useCachedValue<string>('key', 'defaultValue');
 * ```
 */
function useStateCache<VALUE = string>(
  /**
   * Key in storage
   */
  key: string,
  /**
   * Default cached value
   */
  defaultValue: VALUE,
  /**
   * Storage type: localStorage or sessionStorage
   *
   * @default 'localStorage'
   */
  storageType: StorageType = 'localStorage',
): [VALUE, Dispatch<SetStateAction<VALUE>>] {
  const localAccountId = 'anonymous';
  const storageKey = `${COOKIE_PREFIX}.${localAccountId}.${key}`;

  const initializeCachedValue = useCallback(() => {
    if (typeof window === 'undefined') {
      return defaultValue;
    }

    try {
      const value = getStorageType(storageType).getItem(storageKey) || '';
      return (JSON.parse(value) as VALUE) || defaultValue;
    } catch (error) {
      return defaultValue;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey, storageType]);

  const [cachedValue, setCachedValue] = useState<VALUE>(initializeCachedValue);

  useEffect(() => {
    setCachedValue(initializeCachedValue());
  }, [initializeCachedValue]);

  /**
   * Sets the value in storage and updates the state.
   */
  const setValue = useCallback<Dispatch<SetStateAction<VALUE>>>(
    (setState) => {
      function saveValue(value: VALUE) {
        const valueToSave = JSON.stringify(value);
        getStorageType(storageType).setItem(storageKey, valueToSave);
      }

      if (setState instanceof Function) {
        return setCachedValue((prevValue) => {
          const newValue = setState(prevValue);
          saveValue(newValue);
          return newValue;
        });
      } else {
        const value = setState;
        if (typeof value !== 'undefined') {
          setCachedValue(value);
          saveValue(value);
        }
      }
    },
    [storageKey, storageType],
  );

  /**
   * Handles changes in localStorage.
   * If the key is the same as the one we're using, we update the value.
   */
  useEffect(() => {
    function onStorageChange(event: StorageEvent): void {
      if (event.key === storageKey) {
        const value = event.newValue || '';
        try {
          setCachedValue(JSON.parse(value) as VALUE);
        } catch {
          // Ignore - we don't want to break the app if there's a problem with parsing
        }
      }
    }

    if (storageType === 'localStorage') {
      window.addEventListener('storage', onStorageChange);
      return () => {
        window.removeEventListener('storage', onStorageChange);
      };
    }
  }, [storageKey, storageType]);

  return [cachedValue, setValue];
}

export default useStateCache;
