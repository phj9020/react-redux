import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";


 const addToDo = (text)=>{
    return{
        type: ADD,
        text: text
    }
}

 const deleteToDo = (id)=>{
    return {
        type: DELETE,
        id : id
    }
}

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD: 
            return [{text: action.text, id: Date.now()}, ...state]
        case DELETE:
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
};

const store = createStore(reducer);

export const actionCreators = { addToDo, deleteToDo }

// 변화가 일어나면 다시 render를 해야 한다 
// store의 변동사항에대해 subsribe  : where react-redux comes in 
// store.subscribe()

export default store; 