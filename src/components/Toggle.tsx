import React from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
const Toggle = (): JSX.Element => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <div
      id="li"
      onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
    >
      tew
    </div>
  );
};

export default Toggle;
