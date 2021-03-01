import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItems extends Component {
    getStyle = () => {
        return {
            backgroundColor : 'grey',
            borderBottom : '2px #ccc solid',
            padding : '10px',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none' 
    }
}
    
    markCompleted = (e) =>{
        console.log(this.props);
    }
    render() {
        const{id,title}= this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange = {this.props.markComplete.bind(this,id)}/>
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>   
                </p>
            </div>
        )
    }
}
// PropTypes
TodoItems.propTypes={
    todo:PropTypes.object.isRequired
}

// Style
const btnStyle = {
    background : '#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 10px',
    borderRadius:'50%',
    cursor:'pointer'

}
export default TodoItems
