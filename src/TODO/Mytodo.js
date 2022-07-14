import React, { useState } from "react";
import MyshowTodo from "./MyshowTodo";
import "./Mytodo.css";

const Mytodo = () => {
  const [myTask, setMyTask] = useState("");
  const [myData, setMydata] = useState([]);

  const InputEvent = (e) => {
    setMyTask(e.target.value);
    console.log(e.target.value);
  };

  const Onsubmit = (e) => {
    e.preventDefault();

    setMydata([...myData, myTask]);
    setMyTask("");
  };

  const deleteItem = (a) => {
    const finalData = myData.filter((curEle, index) => {
      return index !== a;
    });
    setMydata(finalData);
  };
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center main-row">
        <h1 className="align-items-centerjustify-content-center text-center mt-5">
          Geeta's WEB
        </h1>
        <div className="col shadow main-col bg-white">
          <div className="row bg-primary text-white">
            <div className="col  p-2">
              <h4 className="text-center">Todo App Using React JS</h4>
            </div>
          </div>
          <form onSubmit={Onsubmit}>
            <div className="row justify-content-between text-white p-2">
              <div className="form-group flex-fill mb-2 col-9">
                <input
                  id="todo-input"
                  type="text"
                  className="form-control"
                  value={myTask}
                  onChange={InputEvent}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">
                Add todo
              </button>
            </div>
          </form>

         {myData.map((value, index)=>{
          return(
            <MyshowTodo
            key={index}
            id={index}
           myval={value}
           onSelcet={deleteItem}
            />
          )
         })}
        </div>
         
      </div>
    </div>
  );
};

export default Mytodo;
