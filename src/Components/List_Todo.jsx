import React from 'react'
import './Main_todo.css';

const List_Todo = (props) => {
    const showTodo=props.todos;
    
  return (
    <div className='my_list_todo p-3'>
        <h4>Todos Lists</h4>
        
        {showTodo.map((currTodo, index)=>{
            return(
                <div key={index} className='row'>
                    <div className='col-sm-8'>
                        <h5 className="text">{currTodo.title}</h5>
                        <p><span className="badge bg-secondary">New</span></p>
                        <p>{currTodo.content}</p>
                        
                    </div>
                    <div className="col-sm-4">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                  
            )
        })}
         
</div>
  )
}

export default List_Todo;