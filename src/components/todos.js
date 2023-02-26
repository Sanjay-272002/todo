import React ,{useContext}from "react";
import { Container, ListGroup,ListGroupItem } from "reactstrap";
import {FaCheckDouble} from "react-icons/fa"; 
import { TodoContext } from "../context/todocontext";
import { REMOVE_TODO } from "../context/action.types";
const Todos = ()=>{
   const {todos,dispatch}=useContext(TodoContext);
   return(
    <Container>
           <ListGroup className="mt-5 mb-2 items mx-auto w-50">
        {todos.map(todo=>(
            <ListGroupItem key={todo.id}>
            {todo.todoString}
            <span className="float-right"
            onClick={()=>{
                dispatch({
                    type:REMOVE_TODO,
                    payload: todo.id
                })
            }}>
                <FaCheckDouble/>
            </span>
            </ListGroupItem>
        ))}
    </ListGroup>
    </Container>
   )
}

export default Todos;
