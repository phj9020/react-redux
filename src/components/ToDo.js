import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {remove } from '../store';

function ToDo({text, onBtnClick, id}){
    console.log(text)
    return(
        <li>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={onBtnClick}>Delete</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps)
    return {
        onBtnClick : () => dispatch(remove(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);