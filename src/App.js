import React,{useReducer} from 'react';
import  {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {TodoContext} from "./context/todocontext"
import todoReducer from "./context/reducer"
import TodoForm from './components/TodoForm';
import Todos from './components/todos';


const App= ()=> {
  const [todos,dispatch]=useReducer(todoReducer,[])
  return (
   <TodoContext.Provider value={{todos,dispatch}}>
     <Container fluid>
      <h1>TODO APP</h1>
      <TodoForm/>
      <Todos/>
     </Container>
   </TodoContext.Provider>
  );
}

export default App;
