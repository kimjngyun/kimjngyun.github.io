import React, { CSSProperties } from "react";
import { W, E, B, D, V } from "./alphabets";
import "./styles.css";
const Webdev = (): JSX.Element => {
  const commonCSSProps: CSSProperties = {
    // mixBlendMode: "multiply",
  };
  return (
    <div id="webdev">
      <W styles={{ ...commonCSSProps }} />
      <E styles={{ ...commonCSSProps }} />
      <B styles={{ ...commonCSSProps }} />
      <D styles={{ ...commonCSSProps }} />
      <E styles={{ ...commonCSSProps }} />
      <V styles={{ ...commonCSSProps }} />
    </div>
  );
};

export default Webdev;
