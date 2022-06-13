import React, { useEffect, useMemo, useState } from "react";

import Footer from "@theme/Footer";
import LayoutProviders from "@theme/LayoutProviders";
import _ from "lodash";
import Circle from "../components/Circle";
import Toggle from "../components/Toggle";
import "./styles.css";

const Home = (): JSX.Element => {
  const [radius, setRadius] = useState(50);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changeCenter = (event) => {
    const dx = -window.innerWidth / 2 + event.clientX;
    const dy = -window.innerHeight / 2 + event.clientY;
    setRadius(50 + Math.sqrt(dx ** 2 + dy ** 2) * 10);
    setX(dx / 4);
    setY(dy / 4);
  };

  const throttledHandler = useMemo(() => _.throttle(changeCenter, 300), []);

  useEffect(() => {
    document.addEventListener("mousemove", throttledHandler);
    return () => document.removeEventListener("mousemove", throttledHandler);
  });

  return (
    <LayoutProviders>
      <div id="container">
        <>
          <Circle
            radius={radius}
            x={x}
            y={y}
            color1="#F5DF4D"
            color2="#FF6F61"
            id={1}
          />
          <Circle
            radius={radius * 0.8}
            x={-x}
            y={-y}
            color1="#0f4c81"
            color2="#7bc4c4"
            id={2}
          />
          <Circle
            radius={radius * 0.5}
            x={x - 50}
            y={-y + 50}
            color1="#ad5e99"
            color2="#88b04b"
            id={3}
          />
          <div id="mask"></div>
        </>
        <div id="menu">
          <Toggle />
          <a id="li" href="/blog">
            blog
          </a>
          <a id="li" href="/blog/tags">
            tags
          </a>
          <a id="li" href="/blog/archive">
            archive
          </a>
        </div>
        <div style={{ position: "absolute", bottom: "0px" }}>
          <Footer />
        </div>
      </div>
    </LayoutProviders>
  );
};

export default Home;
