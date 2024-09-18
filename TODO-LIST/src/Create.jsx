import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();
  const handelAdd = () => {
    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="crete_form">
      <input type="text" onChange={(e) => setTask(e.target.value)} />
      <button type="submit" onClick={handelAdd}>
        Add Task
      </button>
    </div>
  );
};

export default Create;
