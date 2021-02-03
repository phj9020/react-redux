import { createStore } from "redux";
import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";





// CASE 4: Using createSlice  : reducer + action 

const toDos = createSlice({
    name: 'toDosReducer',
    initialState : [], 
    reducers: {
        add: (state, action) => {
            state.push({text: action.payload, id: Date.now()})
        },
        remove : (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

console.log(toDos.actions)

/* CASE 3 :  no using createSlice. but, createReducer, createAction

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// redux toolkit에서는 mutate state 가능 
// createReducer할 때 2개 옵션 새로운 state를 리턴하거나 기존의 state를 mutate한다 
const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push({text: action.payload, id: Date.now()})
    },
    [deleteToDo] : (state, action) => {
        return state.filter(item => item.id !== action.payload)
    }
})

*/


/* CASE 2 : not using createReducer  but only createAction

    const addToDo = createAction("ADD");
    const deleteToDo = createAction("DELETE");

    const reducer = (state = [], action) => {
    switch(action.type) {
        case addToDo.type: 
            return [{text: action.payload, id: Date.now()}, ...state]
        case deleteToDo.type:
            return state.filter(item => item.id !== action.payload)
        default:
            return state
    }
} */


/*  CASE 1 : without Tookkit at all 

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

// mutate state 불가능 
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

*/


// CASE 1,2,3 
// const store = createStore(reducer);

// CASE 4 : use configureStore for redux developer tool in extension
const store = configureStore({reducer : toDos.reducer})


// CASE 1,2,3 
// export const actionCreators = { addToDo, deleteToDo }

// CASE 4 
export const { add, remove } = toDos.actions



// 변화가 일어나면 다시 render를 해야 한다 
// store의 변동사항에대해 subsribe  : where react-redux comes in 
// store.subscribe()

export default store; 