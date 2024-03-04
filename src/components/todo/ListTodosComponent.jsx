import React from "react";

const ListTodosComponent = () => {
  const today = new Date();

  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const todos = [
    { id: 1, description: "learn AWS", done: false, targetDate: targetDate },
    { id: 2, description: "learn AWS", done: false, targetDate: targetDate },
    { id: 3, description: "learn AWS", done: false, targetDate: targetDate },
  ];

  return (
    <div classname="container">
      <h1>Things you want to do !!</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Description</td>
              <td>Is Done</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodosComponent;
