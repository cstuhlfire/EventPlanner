import React from 'react'
import "./ToDo.css";

import React, { useState } from "react";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  
  return (
    <div className="container">
      <div className="body">
        <h3>Create a todo</h3>
        <div className="todo-form">
          <form>
            <label>
              Add todo
              <input type="text" name="todo" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todos;