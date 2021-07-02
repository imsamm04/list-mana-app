import TodoList from "./components/TodoList";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [todoList, settodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      settodoList([
        { id: v4(), name: textInput, isComplete: false },
        ...todoList,
      ]);
      setTextInput("");
    },
    [ , todoList]
  );

  const onCheckBtnClick = useCallback((id) => {
    settodoList((prevState) => prevState.map((todo) => todo.id === id ? {...todo, isCompleted: true} : todo));
  }, []);

  return (
    <div>
      <h3> Danh Sach can lam</h3>
      <Textfield
        name="add-todo"
        placeholder="Them viec can lam"
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            Them
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      ></Textfield>
      <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
    </div>
  );
}

export default App;
