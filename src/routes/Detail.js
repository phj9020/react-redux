import React from 'react';
import {connect} from 'react-redux';

// import { useParams } from 'react-router-dom';

function Detail({toDo}){
    // const {id} = useParams();
    // console.log(id)
    console.log(toDo)
    const timeStamp = toDo?.id;
    const date = new Date(timeStamp).toDateString();
    const time = new Date(timeStamp).toLocaleTimeString();
    const formattedTime = `${date} & ${time}`
    return(
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at {formattedTime}</h5>
        </>
    )
}

function mapStateToProps(state, ownProps){
    console.log(ownProps.match.params.id)
    const { match : {params : { id }} } = ownProps
    console.log(id)
    console.log(state)
    return {
        toDo: state.find(todo => todo.id === parseInt(id))
    }
}

export default connect(mapStateToProps)(Detail);