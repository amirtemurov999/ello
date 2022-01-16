import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useStyles } from "./hooks/useStyles";
interface IProps {
  visibleItems?: number;
  direction?: "VERTICAL" | "HORIZONTAL";
  grip?: number;
  fit?: boolean;
}
export const Carousel: React.FC<IProps> = ({
  children,
  visibleItems = 1,
  grip = 0,
}) => {
  const styles = useStyles();
  const [visibleWidth, setVisibleWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [diff, setDiff] = useState(0);
  const [counter, setCounter] = useState(0);
  const [len, setLen] = useState(Object.keys(children || {}).length);
  const reff = useRef<Array<HTMLDivElement>>([]);
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (container.current) {
      console.log(container.current);
      setLen(Object.keys(children || {}).length);
      setVisibleWidth(
        (reff.current[0].offsetWidth + grip) * visibleItems - grip
      );
      setWidth(reff.current[0].offsetWidth + grip);
      setDiff(0);
      setCounter(0);
    }
  }, []);

  function move(direction: "left" | "right") {
    switch (direction) {
      case "left":
        if (counter == 0) {
          setCounter(len - visibleItems);
          setDiff(-(len - visibleItems) * width);
        } else {
          setCounter((old) => old - 1);
          setDiff((old) => old + width);
        }
        break;
      case "right":
        if (counter == len - visibleItems) {
          setCounter(0);
          setDiff(() => 0);
        } else {
          setDiff((old) => old - width);
          setCounter((old) => old + 1);
        }
        break;
    }
  }

  return (
    <>
      <div className={styles.wrapper} style={{ width: visibleWidth }}>
        <div
          className={styles.transfer}
          style={{ transform: `translateX(${diff}px)` }}
          ref={container}
        >
          {React.Children.map(children, (element: any, idx) => {
            return React.cloneElement(element, {
              ref: (ref: never) => reff.current.push(ref),
              style: { marginRight: grip },
            });
          })}
        </div>
        <button onClick={() => move("left")} className={styles.prev + " btn"}>
          {"<"}
        </button>
        <button onClick={() => move("right")} className={styles.next + " btn"}>
          {">"}
        </button>
      </div>
    </>
  );
};
