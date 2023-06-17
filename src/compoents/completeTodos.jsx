export const CompleteTodos = (props)=>{
  const {todos ,onClickBack } = props

  return(
    todos.map((todo,index) =>{
      return(
        <li key={todo}>
          <div className="li-wrapper">
            <p>{todo}</p>
            <button onClick = {()=>onClickBack(index)}>戻す</button>
          </div>
        </li>
      )
  })
  )
}
