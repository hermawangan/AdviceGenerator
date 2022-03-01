import React, { useState, useEffect } from "react";
import DesktopPreview from "./DesktopPreview";
import MobilePreview from "./MobilePreview";

function Previews() {
  const [width, setWidth] = useState(window.innerWidth);

  const setDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [width]);

  return <>{width > 600 ? <DesktopPreview /> : <MobilePreview />}</>;
}

export default Previews;
