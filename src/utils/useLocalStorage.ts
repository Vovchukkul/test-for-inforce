import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T): [T, (value: T | ((prevValue: T) => T)) => void] => {
  const storedValue = localStorage.getItem(key);
  const [value, setValue] = useState<T>(storedValue ? JSON.parse(storedValue) : initialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};