import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">CRUD & TODO</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link" href="/todos">Todos</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/mytodo">MyTodo</a>
          </li> */}
        
        </ul>
       
      </div>
    </div>
    <Link className='btn btn-outline-light w-25' to="/addusers">Add Users</Link>
  </nav>
  </div>
  )
}

export default Navigation;