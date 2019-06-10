import { useRef, useEffect } from "react";

export const useHover = onHover => {
  if (typeof onHover !== "function") {
    return;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return element;
};
