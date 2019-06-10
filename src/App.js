import React from "react";
import { useInput } from "./useInput";
import { UseTabs } from "./useTabs";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";
import { useHover } from "./useHover";

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
  const { currentItem, changeItem } = UseTabs(0, content);

  /* useTitle */
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 2000);

  /* useClick */
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  /* useHover */
  const sayBye = () => console.log("say bye");
  const titleTow = useHover(sayBye);

  return (
    <>
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
      <>
        <h1 ref={title}>Click Event</h1>
      </>
      <>
        <h1 ref={titleTow}>Hover Event</h1>
      </>
    </>
  );
};

export default App;
