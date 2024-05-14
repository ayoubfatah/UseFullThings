import { useState } from 'react';

export function useDebouncing() {
  const [timeoutId, setTimeoutId] = useState(null);

  function handleDebouncing(callback, delay = 500) {
    // Clear previous timeout if exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set new timeout
    const newTimeoutId = setTimeout(() => {
      callback();
    }, delay);

    // Update the timeout ID
    setTimeoutId(newTimeoutId);
  }

  return handleDebouncing;
}

