export const InCompleteTodos = (props)=>{
  const {todos ,onClickComplete , onClickDelete } = props

  return(
    todos.map((todo,index) =>{
      return(
        <li key={todo}>
          <div className="li-wrapper">
            <p>{todo}</p>
            <button onClick = {()=>onClickComplete(index)}>完了</button>
            <button onClick = {()=>onClickDelete(index)}>削除</button>
          </div>
        </li>
      )
  })
  )
}
