// hooks/useScreenShake.ts
import { useCallback } from "react";

export function useScreenShake() {
  const shakeScreen = useCallback(() => {
    document.body.classList.add("shake");
    setTimeout(() => {
      document.body.classList.remove("shake");
    }, 500); // Remove the class after 500ms
  }, []);

  return shakeScreen;
}

// css code
/*
@keyframes shakeAnimation {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-2px, -1px) rotate(-0.5deg);
  }
  50% {
    transform: translate(2px, 1px) rotate(0.5deg);
  }
  75% {
    transform: translate(-2px, 1px) rotate(-0.5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

body.shake {
  animation: shakeAnimation 0.2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}


*/
