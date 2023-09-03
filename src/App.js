import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Video from "./components/Video";
import data from "./todo-data/data";
import TodoDispatchContext from "./Context/TodoContext";
import { useReducer } from "react";

// function App() {      // this is a functional component

//   let name = "sumit app";
//   let className = 'App-header'
//   let appName = 'App';
//   console.log('App');
//   return (
//     <div className= {appName}>
//       <div className= {className}>
//         {name /* this is expression  */}
//       <Demo></Demo>
//       </div>
//     </div>
//   );
// }

// function Demo() {
//   console.log('Demo');
//   return (
//     <div className='App'>
//       <div className='App-header'>
//         Demo Fun
//       </div>
//     </div>
//   )
// }

// export default App;

function App() {
  function todoReducer(todo, action) {
    switch (action.type) {
      case "ADD":
        return [...todo, { ...action.payload, id: todo.length + 1 }];

      case "DELETE":
        return todo.filter((todoData) => todoData.id !== action.payload);

      case "UPDATE":
        const index = todo.findIndex((t) => t.id === action.payload.id);
        const newTodos = [...todo];
        newTodos.splice(index, 1, action.payload);
        return newTodos;

      default:
        return todo;
    }
  }

  const [todo, dispatch] = useReducer(todoReducer, data);

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <div className="App">
        <div
          style={{
            display: "grid",
            alignItems: "center",
            border: "2px solid blue",
          }}
        >
          <h1 style={{ color: "orange", textAlign: "center" }}>
            CRUD OPERATION
          </h1>
          <div className="container">
            {/*dispatch={dispatch({ type: "ADD", payload: todo })}*/}
            <AddTodo todos={data} />
          </div>
          <div className="container">
            <TodoList />
          </div>
        </div>
      </div>
    </TodoDispatchContext.Provider>
  );
}

export default App;
