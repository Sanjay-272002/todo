import {ADD_TODO,REMOVE_TODO,EDIT_TODO,CHECK_TODO} from "./action.types";




export default (state,action)=>{
    switch(action.type){
        case ADD_TODO:
            console.log('ADD')
            return [...state,action.payload]
        case REMOVE_TODO:
            return state.filter(todo=> todo.id!==action.payload)
        case EDIT_TODO:
            console.log('EDIT')
            return state.map(t => {
                if (t.id === action.payload.idd) {
                    t.todoString=action.payload.todoString;
                  return t;
                } else {
                  return t;
                }
              });
        case CHECK_TODO:
            console.log("True")
            return state.map(t => {    
                if (t.id === action.payload) {
                    console.log(t.com, !t.com)
                    t.com= true;
                  return t;
                } else {
                    console.log('id',action.payload)
                  return t;
                }
              });
        default:
            return state;
    }
    
}
