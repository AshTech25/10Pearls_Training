import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import { v4 as uuidv4 } from 'uuid';


class Post extends Component {
    
    componentWillMount(){
        this.props.fetchPosts();
    }

    // componentWillReceiveProps(nextProps){
    //     if(nextProps.newPost){
    //         console.log(nextProps.newPost);
    //         this.props.posts.unshift(nextProps.newPost);
    //     }
    // }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (prevProps.newPost) {
            console.log(prevProps.newPost);
            
            this.props.posts.unshift(prevProps.newPost);
        }
      }
    
    render() {
        const data = this.props.posts.map(post=>(
            <div key={uuidv4()}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {data}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost : state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Post);