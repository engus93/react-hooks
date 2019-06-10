import { useRef } from "react";

export const useFullscreen = () => {
  const element = useRef();

  const triggerFullScreen = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };

  const exitFullScreen = () => {
    document.exitFullscreen();
  };

  return { element, triggerFullScreen, exitFullScreen };
};
