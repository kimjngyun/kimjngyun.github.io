import React, { useEffect, useMemo, useState } from "react";
import Footer from "@theme/Footer";
import _, { min } from "lodash";
import "./styles.css";

interface CircleProps {
  id?: number;
  radius: number;
  x?: number;
  y?: number;
  color1?: string;
  color2?: string;
}

const Circle = (props: CircleProps): JSX.Element => {
  const { id, radius, x, y, color1, color2 } = props;
  return (
    <svg
      className={"svg" + (id === 2 ? " second" : "")}
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={250 + x}
        cy={250 + y}
        r={min([125, radius])}
        fill={`url(#paint0_linear_104_${id})`}
        style={{ transition: "1s" }}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_104_${id}`}
          x1="0"
          y1="0"
          x2="500"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color1} />
          <stop offset="1" stopColor={color2} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Home = (): JSX.Element => {
  const [radius, setRadius] = useState(50);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changeCenter = (event) => {
    setRadius(
      40 + Math.sqrt(Math.abs(-window.innerWidth / 2 + event.pageX)) * 20
    );
    setX((-window.innerWidth / 2 + event.clientX) / 4);
    setY((-window.innerHeight / 2 + event.clientY) / 4);
  };

  const throttledHandler = useMemo(() => _.throttle(changeCenter, 500), []);

  useEffect(() => {
    window.addEventListener("mousemove", throttledHandler);
    return document.removeEventListener("mousemove", throttledHandler);
  });

  return (
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
        <div id="mask"></div>
      </>
      <div id="menu">
        <div id="li">tew</div>
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
  );
};

export default Home;
