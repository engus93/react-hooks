import React from "react";
import { useInput } from "./useInput";
import { UseTabs } from "./useTabs";
import { useTitle } from "./useTitle";
import { useClick } from "./useClick";
import { useHover } from "./useHover";
import { useConfirm } from "./useConfirm";
import { usePreventLeave } from "./usePreventLeave";

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

  /* useConfirm */
  const deleteWorld = () => console.log("deleting the world");
  const cancelWorld = () => console.log("cancel");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, cancelWorld);

  /* usePreventLeave */
  const { enablePrevent, disablePrevent } = usePreventLeave();

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
      <>
        <>
          <h3>useConfirm</h3>
          <button onClick={confirmDelete}>Delete the world</button>
        </>
        <div>
          <h3>usePreventLeave</h3>
          <button onClick={enablePrevent}>Protect</button>
          <button onClick={disablePrevent}>UnProtect</button>
        </div>
      </>
    </>
  );
};

export default App;
