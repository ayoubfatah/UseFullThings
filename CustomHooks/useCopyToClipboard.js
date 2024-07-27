import { useState, useCallback } from "react";

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((text) => {
    if (!navigator.clipboard) {
      console.warn("Clipboard not supported");
      return false;
    }
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      },
      () => {
        console.warn("Copy failed");
        setIsCopied(false);
      }
    );
  }, []);

  return [isCopied, copyToClipboard];
}

export default useCopyToClipboard;
