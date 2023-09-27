import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Video from "./components/Video";
import data from "./todo-data/data";
import TodoDispatchContext from "./Context/TodoContext";
import { useReducer, useState } from "react";

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
  console.log('render App');

  const [editTableTodo,setEditTableVideo] = useState(null);

  function todoReducer(todos,action) {
    switch(action.type) {
      case 'ADD':
        return [...todos,
          {...action.payload,id: todos.length+1}
        ];

      case 'DELETE':
        return todos.filter(item => item.id !== action.payload);

      case 'UPDATE':
        let index = todos.findIndex(item=>item.id === action.payload.id)
        const newTodos = [...todos];
        newTodos.splice(index,1,action.payload);
        setEditTableVideo(null);
        return newTodos;

      case 'default':
        return todos;
    }
  }

  const [todos,dispatch] = useReducer(todoReducer,data);

  // const [todos,setTodos] = useState(data);

  // function addTodos(formTodo) {
  //   // useReducer 
  //   dispatch({type:'ADD',payload:formTodo});


  //   // setTodos( 
  //   //   [...todos,
  //   //   {...formTodo,id: todos.length+1}
  //   // ]);
  // }
  // console.log(todos);

  // function deleteTodos(deleteId) {
  //   // useReducer
  //   dispatch({type:'DELETE',payload:deleteId})


  //   // console.log(deleteId);
  //   // console.log(todos.filter(item => item.id !== deleteId));
  //   // setTodos(todos.filter(item => item.id !== deleteId));
  // }

  function editTodos(editId) {    // to get the edit data from id and send it to addTodo to edit it.
    console.log(editId);
    // console.log(todos.find(item => item.id === editId));
    setEditTableVideo(todos.find(item => item.id === editId));
  }

  // function updateTodo(editData) {
  //   // useReducer
  //   dispatch({type:'UPDATE',payload:editData});


  //   // console.log(editData);
  //   // let index = todos.findIndex(item=>item.id === editData.id)
  //   // const newTodos = [...todos];
  //   // newTodos.splice(index,1,editData);
  //   // console.log(newTodos);
  //   // setTodos(newTodos);
  //   // setEditTableVideo(null);
  // }


  return (
    // <TodoDispatchContext.Provider >
      <div className="App">
        <div
          style={{
            display: "grid",
            alignItems: "center",
            // border: "2px solid blue",
          }}
        >
          <h1 style={{ color: "orange", textAlign: "center" }}>
            CRUD OPERATION
          </h1>
          <div className="container">
            {/*dispatch={dispatch({ type: "ADD", payload: todo })}*/}
            <AddTodo dispatch={dispatch} editTableTodo={editTableTodo} />
          </div>
          <div className="container-2">
            <div className="records">
              <p className="heading-5">Completed Items: <span>0/{todos.length}</span></p>
            </div>
            <TodoList editTodos={editTodos} dispatch={dispatch} data={todos} />
          </div>
        </div>
      </div>
    // </TodoDispatchContext.Provider>
  );
}

export default App;
