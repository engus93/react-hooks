import React from "react";
import useInput from "./useInput";

const App = () => {
  // @를 막아줌
  const validator = value => !value.includes("@");

  const name = useInput("Mr. ", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
