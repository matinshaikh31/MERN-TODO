import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { GoCheckCircleFill } from "react-icons/go";
import { GoCircle } from "react-icons/go";
import { FaTrash } from "react-icons/fa";

const Home = () => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handelEdit = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const handelDelet = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="home">
      <h2>Todo App</h2>
      <Create />
      {todo.length === 0 ? (
        <div>
          <h2>No Records</h2>
        </div>
      ) : (
        todo.map((data) => (
          <div className="task">
            <div className="checkbox" onClick={() => handelEdit(data._id)}>
              {data.done ? (
                <GoCheckCircleFill className="icon" />
              ) : (
                <GoCircle className="icon" />
              )}

              <p className={data.done ? "lineThrough" : ""}>{data.task}</p>
            </div>
            <div>
              <span>
                <FaTrash
                  className="icon"
                  onClick={() => handelDelet(data._id)}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
