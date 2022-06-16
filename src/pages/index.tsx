import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  WheelEventHandler,
  MouseEventHandler,
} from "react";

import Footer from "@theme/Footer";
import LayoutProviders from "@theme/LayoutProviders";
import _ from "lodash";
import Circle from "../components/Circle";
import Toggle from "../components/Toggle";
import "./styles.css";
import Webdev from "../components/Webdev";

const Home = (): JSX.Element => {
  const sectionNumber = 1;
  const [radius, setRadius] = useState(25);
  const [center, setCenter] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [page, setPage] = useState(0);
  const [scroll, setScroll] = useState(true);
  const pageRef = useRef([]);

  const changeCenter = (event: { clientX: number; clientY: number }) => {
    const dx = -window.innerWidth / 2 + event.clientX;
    const dy = -window.innerHeight / 2 + event.clientY;
    setRadius(25 + Math.sqrt(dx ** 2 + dy ** 2) * 0.5);
    setCenter({ x: dx / 4, y: dy / 4 });
  };

  const throttledHandler = useMemo(() => _.throttle(changeCenter, 500), []);
  const wheelPreventDefault = (e: WheelEvent) => e.preventDefault();

  const handleWheel: WheelEventHandler = (e) => {
    if (scroll) {
      let nextPage: number;
      if (Math.abs(e.deltaY) < 80) return;
      if (e.deltaY < 0) {
        nextPage = page === 0 ? 0 : page - 1;
      } else {
        nextPage = page < sectionNumber ? page + 1 : sectionNumber;
      }
      pageRef.current[nextPage].scrollIntoView({ behavior: "smooth" });
      setPage(nextPage);
      setScroll(false);
      setTimeout(() => {
        setScroll(true);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", throttledHandler);
    window.addEventListener("wheel", wheelPreventDefault, {
      passive: false,
    });
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    return () => {
      window.removeEventListener("mousemove", throttledHandler);
      window.removeEventListener("mousemove", wheelPreventDefault);
    };
  }, []);

  return (
    <LayoutProviders>
      <div className="circles">
        <Circle
          radius={radius}
          x={center.x}
          y={center.y}
          color1="#F5DF4D"
          color2="#FF6F61"
          id={1}
        />
        <Circle
          radius={radius * 0.8}
          x={center.x / 2}
          y={-center.y / 2}
          color1="#0f4c81"
          color2="#7bc4c4"
          id={2}
        />
        <Circle
          radius={radius * 0.5}
          x={-center.x + 50}
          y={-center.y}
          color1="#ad5e99"
          color2="#88b04b"
          id={3}
        />
        <div
          id="mask"
          style={{ backdropFilter: `blur(${page === 0 ? 0 : 100}px)` }}
        />
      </div>
      <div className="container" onWheel={handleWheel}>
        <div className="section" ref={(el) => (pageRef.current[0] = el)}>
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
        <div className="section 1" ref={(el) => (pageRef.current[1] = el)}>
          <div className="inner">
            <h1 className="title">About Me</h1>
          </div>
        </div>
      </div>
    </LayoutProviders>
  );
};

export default Home;
