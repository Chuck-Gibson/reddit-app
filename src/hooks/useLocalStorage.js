import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  if (typeof key !== 'string' || typeof defaultValue !== 'string') {
    throw new Error('key and value can only be of type string');
  }

  const [state, setState] = useState(() => {
    let value;
    try {
      value = window.localStorage.getItem(key);
    } catch (error) {
      console.log(error);
      value = defaultValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(String(key), state);
  });

  return [state, setState];
};
