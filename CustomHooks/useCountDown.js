import { useEffect, useState } from "react";

const useCountDown = (startValue, duration = 2000) => {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    if (startValue <= 0) {
      setValue(0);
      return;
    }

    const stepTime = duration / startValue;
    const timer = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevValue - 1;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [startValue, duration]);

  return value;
};

export default useCountDown;
