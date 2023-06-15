import React from "react";
import "./styles/main.css"
export const App = ()=> {
  return(
    <>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>
      <div className="incomplete-todo-area">
        <p className="title">未完了のリスト</p>
        <ul>
          <li>
            <div className="li-wrapper">
              <p>todoリスト</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="complete-todo-area">
        <p className="title">完了のリスト</p>
        <ul>
          <li>
            <div className="li-wrapper">
              <p>todoリスト</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>

  )
};
