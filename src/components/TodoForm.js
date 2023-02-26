import React,{useState,useContext} from "react";
import '../App.css';
import{
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    Container,
} from "reactstrap"
import {v4} from "uuid"
import {TodoContext} from "../context/todocontext"
import { ADD_TODO } from "../context/action.types";
const TodoForm = ()=>{
    const [todoString,setTodoString]=useState("");
    const {dispatch} = useContext(TodoContext);
    const handleSubmit = e =>{
        e.preventDefault();
        if(todoString ===""){
            return alert("Please Enter a todo");
        }
        const todo={
            todoString,
            id: v4()
        }
        dispatch({
            type:ADD_TODO,
            payload: todo
        })
        setTodoString("");
    }
   return(
  <Container>
    <Form  className = "mx-auto w-50" onSubmit={handleSubmit}>
            <InputGroup>
            <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
            /> 
                <Button color="warning">
                    Add
                </Button>
                </InputGroup>
    </Form>
    </Container>

   )
}

export default TodoForm;