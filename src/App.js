import React from "react";
import TodoLIst from "./Todo/TodoLIst";

const todos = [
    {id: 1, completed: false, title: 'купить хлеб'},
    {id: 2, completed: false, title: 'купить пиво'},
    {id: 3, completed: false, title: 'купить селедки'},
    {id: 4, completed: false, title: 'купить водки'},
    {id: 5, completed: false, title: 'купить сосисек'}
];

function App() {
  return (
      <div className='wrapper'>
        <h1>React Tutorials</h1>
        <TodoLIst todos={todos} />
      </div>
  );
}

export default App;
