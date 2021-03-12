import Post from './components/Post';
import React from 'react';
import PostForm from './components/PostForm';
import {Provider} from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import store from './store';

// const store = createStore(reducer,[preloadedState],[enhancer])
// const store = createStore(()=>[],{},applyMiddleware())

function App() {
  
  
  
  return (
      <Provider store={store} >
      <div>
      <h1>Hello There</h1>
      <PostForm/>
      <Post/>
      </div>
      </Provider>

    );
}

export default App;
