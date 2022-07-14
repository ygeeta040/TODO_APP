// 

import React, { useState } from "react";

import "./Main_todo.css";

const Create_Todo = () => {
  const [createtodo, setCreatetodo] = useState({
    name: "",
    description: "",
    status: ''
    
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    // setCreatetodo('');
    // e.target.value = null;
    console.log(createtodo);
  
   
  };

  const statusHandler = (e) => {
    setCreatetodo({...createtodo, status: e.target.value})
   
  }

 const listItem=()=>{
  setCreatetodo('');
 }

  return (
    <>
      <h3>Create Todo</h3>
      <form 
            onSubmit={handleSubmit} >
        <div className="create_todo">
          {/* <h1>Create Todo</h1> */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
            <input
              onChange={(e) =>
                setCreatetodo({ ...createtodo, name: e.target.value })
              }
              // onClick={e => (e.target.value = null)}
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
              value={createtodo.name}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
            ></label>
            <textarea
              onChange={(e) =>
                setCreatetodo({ ...createtodo, description: e.target.value })
              }
              // onClick={e => (e.target.value = null)}
              className="form-control"
              id=" description"
              rows="3"
              placeholder="Description..."
              value={createtodo.description}
            ></textarea>
          </div>
          <div className="m-2">
            <input type="radio" onChange={statusHandler}
            // onClick={e => (e.target.value = null)}
             value="Yet to Started" name="Yet" /> Yet to
            Started
            <input type="radio" onChange={statusHandler}
            // onClick={e => (e.target.value = null)}
             value="In Progress" name="In" /> In Progress
            <input type="radio" onChange={statusHandler}
            // onClick={e => (e.target.value = null)} 
            value="Completed" name="Completed" /> Completed
          </div>

          <button
            type="submit"
            className="btn btn-primary m-5"
            onChange={listItem}
          >
            Create Todo
          </button>
        </div>
      </form>
    </>
  );
};

export default Create_Todo;



// 

// import React, { useState } from "react";

// import "./Main_todo.css";

// const Create_Todo = () => {
//   const [createtodo, setCreatetodo] = useState("buy apple")
//   const [Items, setItems]=useState([]);



// const itemEvent =(event)=>{
//   setCreatetodo(event.target.value)
// }

//   const statusHandler = (event) => {
//     setCreatetodo(event.target.value)
   
//   }

//   const listOfItems=()=>{
//     setItems((oldItems)=>{
//       return [...oldItems, createtodo ]
//     })
//   }

//   return (
//     <>
//       <h3>Create Todo</h3>
//       <form >
//         <div className="create_todo">
//           {/* <h1>Create Todo</h1> */}
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label"></label>
//             <input onChange={itemEvent}
              
//               // onClick={e => (e.target.value = null)}
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="name"
//               value={createtodo.name}
//             />
//           </div>
//           <div className="mb-3">
//             <label
//               htmlFor="exampleFormControlTextarea1"
//               className="form-label"
//             ></label>
//             <textarea
//              onChange={itemEvent}
//               // onClick={e => (e.target.value = null)}
//               className="form-control"
//               id=" description"
//               rows="3"
//               placeholder="Description..."
//               value={createtodo.description}
//             ></textarea>
//           </div>
//           <div className="m-2">
//             <input type="radio" onChange={statusHandler}
//             // onClick={e => (e.target.value = null)}
//              value="Yet to Started" name="Yet" /> Yet to
//             Started
//             <input type="radio" onChange={statusHandler}
//             // onClick={e => (e.target.value = null)}
//              value="In Progress" name="In" /> In Progress
//             <input type="radio" onChange={statusHandler}
//             // onClick={e => (e.target.value = null)} 
//             value="Completed" name="Completed" /> Completed
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary m-5"
//             onClick={listOfItems}
//           >
//             Create Todo
//           </button>
//         </div>
//       </form>
//       <div className='my_list_todo p-3'>
//         <h4>Todos Lists</h4>
        
//         {Items.map((currTodo, index)=>{
//             return(
//                 <div key={index} className='row'>
//                     <div className='col-sm-8'>
//                         <h5 className="text">{currTodo.title}</h5>
//                         <p><span className="badge bg-secondary">New</span></p>
//                         <p>{currTodo.content}</p>
                        
//                     </div>
//                     <div className="col-sm-4">
//                         <div className="dropdown">
//                             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Dropdown button
//                             </button>
//                             <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
//                                 <li><a className="dropdown-item" href="#">{createtodo}</a></li>
//                                 <li><a className="dropdown-item" href="#">Another action</a></li>
//                                 <li><a className="dropdown-item" href="#">Something else here</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
                  
//             )
//         })}
         
// </div>
//     </>
//   );
// };

// export default Create_Todo;
