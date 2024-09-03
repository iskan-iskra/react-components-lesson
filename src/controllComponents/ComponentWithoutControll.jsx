import { useRef } from "react";

export function ComponentWithoutControll() {
  const searchInputEl = useRef(null);

  const searchHandler = () => {
    const searchValue = searchInputEl.current.value;
    console.log(`API uncontrolled search with text: ${searchValue}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="search"
        ref={searchInputEl}
        onChange={searchHandler}
      />
    </>
  );
}
