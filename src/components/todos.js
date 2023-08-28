import React ,{useState,useContext}from "react";
import { Container, ListGroup,ListGroupItem } from "reactstrap";
import {FaCheckDouble, FaCross,FaWindowClose} from "react-icons/fa"; 
import { TodoContext } from "../context/todocontext";
import { REMOVE_TODO ,EDIT_TODO,CHECK_TODO} from "../context/action.types";

const Todos = ()=>{
   const {todos,dispatch}=useContext(TodoContext);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoText, setEditedTodoText] = useState('');

  const handleEditStart = (id, text) => {
    setEditingTodoId(id);
    setEditedTodoText(text);
  };

  const handleEditChange = (event) => {
    setEditedTodoText(event.target.value);
  };

  const handleEditCancel = () => {
    setEditingTodoId(null);
    setEditedTodoText('');
  };

  const handleEditSave = (id) => {
    console.log("edit",editedTodoText)
    if (editedTodoText.trim() !== '') {
        console.log("edit",editedTodoText)
      dispatch({
        type: EDIT_TODO,
        payload: { idd:id, todoString: editedTodoText },
      });
    }
    setEditingTodoId(null);
    setEditedTodoText('');
  };

  const handleTodoRemoval = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  };
  const handleTodoCompletion = (id) => {
    console.log('idd',id)
    dispatch({
      type: CHECK_TODO,
      payload: id
    });
  };
   return(
    <Container>
           <ListGroup className="mt-5 mb-2 items mx-auto w-50">
        {todos.map(todo=>(
            <ListGroupItem key={todo.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
              {editingTodoId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editedTodoText}
                    onChange={handleEditChange}
                  />
                  <button onClick={() => handleEditSave(todo.id)}>Save</button>
                  <button onClick={handleEditCancel}>Cancel</button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: todo.com ? 'line-through' : 'underline',
                      flex: 1,
                    }}
                  >
                    {todo.todoString}
                  </span>
                  <span
                    className="float-right"
                    onClick={() => handleTodoRemoval(todo.id)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                  >
                    <FaWindowClose />
                  </span>
                  <span
                    className="float-right"
                    onClick={() => handleEditStart(todo.id, todo.todoString)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                  >
                    Edit
                  </span>
                  <input
            type="checkbox"
            onChange={() => handleTodoCompletion(todo.id)
            }
            style={{ cursor: 'pointer', marginRight: '10px' }}
          />
                </>
              )}
            </div>
            </ListGroupItem>
        ))}
    </ListGroup>
    </Container>
   )
}

export default Todos;
