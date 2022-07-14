import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState([]); 

  

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/userses");
    setUser(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      <div className="pt-5">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider ">
            {user.map((user, index) => (
              <tr>
                <th scope="row"> {index + 1} </th>
                <td> {user.name}</td>
                <td> {user.name}</td>
                <td> {user.email}</td>
                <td>
                  <Link className="btn btn-primary m-2" to="/addUsers">
                    addUsers
                  </Link>
                  <Link
                    className="btn btn-primary"
                    to={`/EditUsers/${user.id}`}
                  >
                    EditUsers
                  </Link>

                  <Link className="btn btn-danger m-2" to="#">
                    DeleteUsers
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
