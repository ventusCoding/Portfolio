import React, { useContext } from "react";
import sun from "../../../assets/sun.glb";
import moon from "../../../assets/moon.glb";

import { ThemeContext } from "../../../Helper/Context";

import "./ModelViewer.module.css";

export const ModelViewer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="elements"></div>
      <model-viewer
        src={theme === "light" ? sun : moon}
        alt="Sun 3D Model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        auto-rotate
        camera-controls
      ></model-viewer>
      <div></div>
    </div>
  );
};
