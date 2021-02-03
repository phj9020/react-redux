import React, {useState} from 'react';
import {connect} from 'react-redux';
import {actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home({toDos, addToDo}) {
    console.log(toDos)
    const [text, setText] = useState("");

    function onChange(e){
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(text);
        // state를 비움으로서 input 란 초기화 
        setText("");
        addToDo(text);
    }

    return(
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {/* toDos = [{ text: "dsfsdf", id: 123123 }] */}
                {toDos.map(item => <ToDo {...item} key={item.id} />)}
            </ul>
        </>
    )
}


// store로부터 state를 가져다 준다
function mapStateToProps(state){
    return {
        toDos : state
    }
}


// dispatch  store.dispatch
function mapDispatchToProps(dispatch){
    return {
        addToDo : (text) => dispatch(actionCreators.addToDo(text))
    }
}

// Connect()는 Home으로 보내는 props에 추가될 수 있도록 허용해준다
// connect(statetoProp함수, dispatch함수)(컴포넌트) 로 연결 
export default connect(mapStateToProps, mapDispatchToProps) (Home);