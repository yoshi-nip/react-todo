import React from "react";
export const Fruit = (props)=>{
  console.log(props)
  //分割代入
  const {color , children} = props
  return(
    //colorは同じ名称なので省略可能
    <p style={{color}}>{children}</p>
  )
}
// export default Fruit
