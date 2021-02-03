import React from 'react';
import {connect} from 'react-redux';
import {actionCreators } from '../store';

function ToDo({text, onBtnClick}){
    console.log(text)
    return(
        <li>{text}<button onClick={onBtnClick}>Delete</button></li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps)
    return {
        onBtnClick : () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);