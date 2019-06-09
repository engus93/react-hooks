import { useRef, useEffect } from "react";

export const useClick = onClick => {
  if (typeof onClick !== "function") return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const element = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        element.current.removeEventListener("click", onClick);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return element;
};

export default useClick;
