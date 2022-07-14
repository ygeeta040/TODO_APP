import React from 'react'

const MyshowTodo = (props) => {
    return (
        <div className='container'>
            <div className="row my-2">

                <div className="col-6">
                    <h6>{props.myval}</h6>
                </div>
                <div className="col-6">
                <button onClick={()=>{
                    props.onSelcet(props.id)
                }}>X</button>
                </div>
            </div>
            
        </div>
    )
}

export default MyshowTodo;