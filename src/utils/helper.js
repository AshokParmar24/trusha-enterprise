import { useState, useEffect } from "react";

export const useWindowDimensions = () => {
  // Initialize state with safe defaults
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Check if window is available (this will run only in the browser)
    console.log('window :>> ', window);
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Set initial dimensions
      handleResize();

      // Set up event listener
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowDimensions;
};
