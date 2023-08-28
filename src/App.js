import React,{useReducer, useState,useEffect} from 'react';
import  {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {TodoContext} from "./context/todocontext"
import todoReducer from "./context/reducer"
import TodoForm from './components/TodoForm';
import Todos from './components/todos';


const App= ()=> {
  const [todos,dispatch]=useReducer(todoReducer,[])
  



const checkTodoTimes = () => {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();
  todos.forEach((todo) => {
    const todotime = todo.todoTime; // Assuming you have a 'time' property in your todo item
   console.log(todotime,time)
    if (
      todotime==time
    ) {
      console.log("true")
     
      alert(`It's time to do: ${todo.todoString}`);
     
    }else{
      console.log("false")
    }
  });
};

useEffect(() => {
  const interval = setInterval(checkTodoTimes, 60000); // Check every minute
  return () => clearInterval(interval);
}, [todos]);
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
