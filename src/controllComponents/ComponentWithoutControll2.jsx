import { useRef } from "react";
import MyInput from "./MyInput";

export function ComponentWithoutControll2() {
  const searchInputEl = useRef(null);

  const searchHandler = () => {
    const searchValue = searchInputEl.current.value;
    console.log(`API uncontrolled search with text: ${searchValue}`);
  };

  return (
    <>
      <MyInput
        type="text"
        placeholder="search"
        ref={searchInputEl}
        onChange={searchHandler}
      />
    </>
  );
}
