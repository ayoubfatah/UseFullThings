import { useCallback, useRef, useState } from 'react';

const useStateWithHistory = (initialState) => {
  const [state, setState] = useState(initialState);
  const historyRef = useRef([state]);
  const pointerRef = useRef(0);

  const set = useCallback((value) => {
    const resolvedValue = typeof value === 'function' ? value(state) : value;
    if (historyRef.current[pointerRef.current] !== resolvedValue) {
      if (pointerRef.current < historyRef.current.length - 1) {
        historyRef.current.splice(pointerRef.current + 1);
      }
      historyRef.current.push(resolvedValue);
      pointerRef.current = historyRef.current.length - 1;
    }
    setState(resolvedValue);
  }, [state]);

  const back = useCallback(() => {
    if (pointerRef.current > 0) {
      pointerRef.current--;
      setState(historyRef.current[pointerRef.current]);
    }
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current < historyRef.current.length - 1) {
      pointerRef.current++;
      setState(historyRef.current[pointerRef.current]);
    }
  }, []);

  return [state, set, { history: historyRef.current, pointer: pointerRef.current, back, forward }];
};