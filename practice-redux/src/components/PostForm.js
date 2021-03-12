import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createPosts} from '../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        }
    // this.onChange.bind(this);
    // this.onSubmit.bind(this);    
    }
    

onChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
}


onSubmit = (e) => {
    e.preventDefault();
    const newPost = {
        title : this.state.title,
        body : this.state.body 
    }
    
    this.props.createPosts(newPost);
}

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <label>Title:</label>
                    <br/>
                    <input type='text' name ='title' value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br/>
                    <div>
                    <label>Body:</label>
                    <br/>
                    <textarea name='body' value={this.state.body} onChange={this.onChange} />
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


export default connect(null,{createPosts})(PostForm);