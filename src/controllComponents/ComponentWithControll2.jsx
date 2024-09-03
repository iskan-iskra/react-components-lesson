import { useState } from "react";
import MyInput from "./MyInput";

export function ComponentWithControll2() {
  const [search, setSearch] = useState("");
  const searchHandler = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    console.log(`API conreolled search with text: ${searchValue}`);
  };

  return (
    <>
      <MyInput
        type="text"
        placeholder="search"
        value={search}
        onChange={searchHandler}
      />
    </>
  );
}
