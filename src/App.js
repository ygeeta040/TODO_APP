import React from 'react';
import About from './Components/PAGES/About';
import Navigation from './Components/PAGES/Layout/Navigation';
import Home from './Components/PAGES/Home';
import { Routes, Route } from 'react-router-dom';
import AddUsers from './Components/PAGES/AddUsers';
import EditUsers from './Components/PAGES/EditUsers';
import Todos from './Components/TODO/Todos';
// import Mytodo from './TODO/Mytodo';
// import './App.css';
// import List_Todo from './Components/List_Todo'
// import Main_todo from './Components/Main_todo';
// import Create_Todo from './Components/Create_Todo';

// const showTodo=[
//   {
//      title: 'first_todo', content: 'Welcome to React!', status: 'pending',
//   },
//   {
//      title: 'second_todo', content: 'Welcome to React!', status: 'in progress'
//   },
//   {
//      title: 'third_todo', content: 'Welcome to React!', status: 'completed'
//   },
  
// ];
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //    {/* <Main_todo/> */}
    //    <Create_Todo/>
    //    <List_Todo todos={showTodo}/>
    //   </header>
    // </div>

    <>
<Navigation/>

    <Routes>
      
    <Route element={<Home/>} path="Home"/> 
    <Route element={<About/>} path="About"/> 
    <Route element={<AddUsers/>} path="AddUsers"/> 
    <Route element={<EditUsers/>} path="EditUsers/:id"/>
    <Route element={<Todos/>}  path="Todos"/>
    {/* <Route element={<Mytodo/>}  path="Mytodo"/> */}
    
    </Routes>
  
    </>
  );
}

export default App;
