import React, { MouseEventHandler, useEffect, useMemo, useState } from "react";
import _, { max, min } from "lodash";
import "./style.css";

interface CircleProps {
  radius: number;
  x?: number;
  y?: number;
  color1?: string;
  color2?: string;
}

const Circle = (props: CircleProps): JSX.Element => {
  const { radius, x, y } = props;
  return (
    <svg
      id="svg"
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={250 - x}
        cy={250 - y}
        r={min([250, radius])}
        fill="url(#paint0_linear_104_2)"
        style={{ transition: "1s" }}
      />
      <defs>
        <linearGradient
          id="paint0_linear_104_2"
          x1="0"
          y1="0"
          x2="500"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5DF4D" />
          <stop offset="1" stopColor="#FF6F61" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Home = (): JSX.Element => {
  const [radius, setRadius] = useState(125);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changeCenter = (event) => {
    setRadius(
      125 + Math.sqrt(Math.abs(-window.innerWidth / 2 + event.clientX)) * 100
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
      <div id="mask"></div>
      <div>
        <Circle radius={radius} x={x} y={y} />
      </div>

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
    </div>
  );
};

export default Home;
