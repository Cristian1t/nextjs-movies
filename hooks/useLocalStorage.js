import { useEffect, useState } from 'react';

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    //check if we're in the browser
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    }
    return initial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
    if (value === undefined) {
      localStorage.clear();
    }
  }, [key, value, setValue]);

  return [value, setValue];
}

export default useLocalStorage;
