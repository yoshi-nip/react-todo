import React, { useState } from "react";
import "./styles/main.css"
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
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button id="add-button" onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-todo-area">
        <p className="title">未完了のリスト</p>
        <ul>
          {incompleteListTodos.map((todo,index) =>{
            return(
              <li key={todo}>
                <div className="li-wrapper">
                  <p>{todo}</p>
                  <button onClick = {()=>onClickComplete(index)}>完了</button>
                  <button onClick = {()=>onClickDelete(index)}>削除</button>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
      <div className="complete-todo-area">
        <p className="title">完了のリスト</p>
        <ul>
        {completeListTodos.map((todo ,index) =>{
            return(
              <li key={todo}>
                <div className="li-wrapper">
                  <p>{todo}</p>
                  <button onClick = {()=>onClickBack(index)}>戻す</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>

  )
};
