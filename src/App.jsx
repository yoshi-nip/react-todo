import React, { useState } from "react";
import "./styles/main.css"
export const App = ()=> {
  const [incompleteListTodos ,setIncompleteListTodos] = useState(["未完了リスト1","未完了リスト2"]);
  const [completeListTodos ,setCompleteListTodos] = useState(["完了リスト1","完了リスト2"]);

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

  return(
    <>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button id="add-button" onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-todo-area">
        <p className="title">未完了のリスト</p>
        <ul>
          {incompleteListTodos.map((todo) =>{
            return(
              <li key={todo}>
                <div className="li-wrapper">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            )
          })}

        </ul>
      </div>
      <div className="complete-todo-area">
        <p className="title">完了のリスト</p>
        <ul>
        {completeListTodos.map((todo) =>{
            return(
              <li key={todo}>
                <div className="li-wrapper">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </>

  )
};
