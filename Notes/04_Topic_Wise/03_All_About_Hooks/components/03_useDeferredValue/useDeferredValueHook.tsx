"use client";
// https://react.dev/reference/react/useDeferredValue
import { ChangeEvent, useState } from "react";
import List from "./List";

const UseDeferredValue = (): React.JSX.Element => {
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input} />
    </>
  );
};

export default UseDeferredValue;
