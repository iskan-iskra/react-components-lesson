import { useContext } from "react";
import { TestContext } from "../context";

export function ComponentWithControll() {
  const [testState, setTestState] = useContext(TestContext);

  const searchHandler = (event) => {
    const searchValue = event.target.value;
    setTestState(searchValue);
    console.log(`API conreolled search with text: ${searchValue}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={testState}
        onChange={searchHandler}
      />
    </>
  );
}
