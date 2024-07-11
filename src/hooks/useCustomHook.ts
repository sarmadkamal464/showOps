// src/hooks/useCustomHook.ts

import { useState, useEffect } from 'react';

export const useCustomHook = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Fetch or compute some data
    setData('Hello from custom hook!');
  }, []);

  return data;
};
