import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = window.localStorage.getItem(key);
    } catch (error) {
      console.log(error);
      value = String(defaultValue);
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(String(key), state);
  });

  return [state, setState];
};
