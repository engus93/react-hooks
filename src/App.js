import React from "react";
import useInput from "./useInput";
import useTabs from "./useTabs";
import useTitle from "./useTitle";

// Contents
const content = [
  {
    id: 1,
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    id: 2,
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

const App = () => {
  /* useInput */

  // @를 막아줌
  const validator = value => !value.includes("@");
  const name = useInput("Mr. ", validator);

  /* useTabs */
  const { currentItem, changeItem } = useTabs(0, content);

  /* useTitle */
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 2000);

  return (
    <>
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <div>
        {content.map((section, index) => (
          <button key={section.id} onClick={() => changeItem(index)}>
            {section.tab}
          </button>
        ))}
      </div>
      {currentItem.content}
    </>
  );
};

export default App;
