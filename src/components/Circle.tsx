import React from "react";
import _, { min } from "lodash";

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
      className={"svg" + ` svg--${id}`}
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

export default React.memo(Circle);
