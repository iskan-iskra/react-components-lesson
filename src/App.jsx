import { ComponentWithControll } from "./controllComponents/ComponentWithControll";
import { ComponentWithoutControll } from "./controllComponents/ComponentWithoutControll";
import { TestContext } from "./context";
import { Profiler, Suspense, useId, useState } from "react";
import { ComponentWithControll2 } from "./controllComponents/ComponentWithControll2";
import { ComponentWithoutControll2 } from "./controllComponents/ComponentWithoutControll2";
import LazyComponent from "./controllComponents/LazyComponent";
import LoadingComponent from "./controllComponents/LoadingComponent";
import ListWrapper from "./controllComponents/ListWrapper";
import AppModal from "./controllComponents/AppModa";
export default function App() {
  const [testState, setTestState] = useState("test");

  const PROFILER_ID = useId();

  function renderHandler(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });
  }

  return (
    <>
      <Profiler id={PROFILER_ID} onRender={renderHandler}>
        <h1>{testState}</h1>
        <hr />
        <TestContext.Provider value={[testState, setTestState]}>
          <ComponentWithControll />
        </TestContext.Provider>
        <ComponentWithoutControll />

        <hr />

        <ComponentWithControll2 />
        <ComponentWithoutControll2 />

        <hr />
        <Suspense fallback={<LoadingComponent />}>
          <LazyComponent />
        </Suspense>

        <hr />

        <ListWrapper>
          <h4>test1</h4>
          <h4>test2</h4>
          <h4>test3</h4>
          <h4>test4</h4>
        </ListWrapper>
      </Profiler>

      <hr />

      <div className="wrapper">
        <div className="container">
          <AppModal />
        </div>
      </div>
    </>
  );
}
