import { lazy } from "react";

function withDelay(importFunc, delay) {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle(importFunc());
    }, delay);
  });
}

const LazyComponent = lazy(() =>
  withDelay(() => import("./HelloComponent.jsx"), 5000)
);

export default LazyComponent;
