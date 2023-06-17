import React, { useState } from "react";
import "./styles/main.css"
import { InputTodo} from "./compoents/inputTodo.jsx";
import { InCompleteTodos } from "./compoents/inCompleteTodos.jsx";
import { CompleteTodos } from "./compoents/completeTodos";

export const App = ()=> {
  const [incompleteListTodos ,setIncompleteListTodos] = useState([]);
  const [completeListTodos ,setCompleteListTodos] = useState([]);

  const [todoText,setTodoText] = useState('')
  const onChangeTodoText = (event) =>{
    setTodoText(event.target.value)
  }
  const onClickAdd = () =>{
    if (todoText === "")return;
    const newTodos = [...incompleteListTodos,todoText]
    setIncompleteListTodos(newTodos);
    alert(todoText);
    setTodoText('');
  }
  const onClickDelete = (index) =>{
    const newTodos = [...incompleteListTodos];
    newTodos.splice(index,1);
    setIncompleteListTodos(newTodos);
  }

  const onClickComplete = (index) =>{
    const newIncompleteTodos = [...incompleteListTodos];
    newIncompleteTodos.splice(index,1);
    const newCompleteTodos = [...completeListTodos,incompleteListTodos[index]];
    setIncompleteListTodos(newIncompleteTodos);
    setCompleteListTodos(newCompleteTodos);
  }

  const onClickBack = (index) =>{
    const newCompleteTodos = [...completeListTodos];
    const newIncompleteTodos = [...incompleteListTodos,newCompleteTodos[index]]

    newCompleteTodos.splice(index,1);
    setCompleteListTodos(newCompleteTodos);
    setIncompleteListTodos(newIncompleteTodos);

  }

  return(
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClickAdd={onClickAdd} />

      <div className="incomplete-todo-area">
        <p className="title">未完了のリスト</p>
        <ul>
          <InCompleteTodos todos = {incompleteListTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
        </ul>
      </div>
      <div className="complete-todo-area">
        <p className="title">完了のリスト</p>
        <ul>
          <CompleteTodos todos={completeListTodos} onClickBack={onClickBack} />
        </ul>
      </div>
    </>

  )
};
