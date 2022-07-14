import React from 'react'
import './Main_todo.css'
const Main_todo = () => {

  const [createToto, setCreatetodo]=('')

  const showTodo=[
    {
      id: 1, title: 'first_todo', content: 'Welcome to React!'
    },
    {
      id: 1, title: 'second_todo', content: 'Welcome to React!'
    },
    {
      id: 1, title: 'third_todo', content: 'Welcome to React!'
    },
    
    {
      id: 1, title: 'fourth_todo', content: 'Welcome to React!'
    },
    
    {
      id: 1, title: 'fifth_todo', content: 'Welcome to React!'
    },
    
    
   
    
  ]

  return (
  
    <div className='myTodo'>
      <button  type="button" className="btn btn-primary mybtn">Create Todo</button>
      <h3>List Todo</h3>
         {
    showTodo.map((currTodo)=>{
      return(
        <>
          <div classNameName='myTodo'>
    
    <form>
 
  <div classNameName="mb-5">
    <label for="exampleInputPassword1" className="form-label"></label>
    
    <input type="text" className="form-control" id="exampleInputPassword1" value={currTodo.title}/>
  </div>


</form>
  
  </div></>
      )
    })
   }
    </div>
  )
}

export default Main_todo;