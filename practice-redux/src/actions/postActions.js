import {FETCH_POSTS,NEW_POST} from './types';
import axios from 'axios';

const base_url = 'http://jsonplaceholder.typicode.com/posts' 


export const fetchPosts = () => (dispatch) => {
  
        
        const axiosConfig =
    {
      headers: {"Content-Type":'application.json'}
    }


    
    const getPosts = async() => {
      try {
        const response = await axios.get(base_url,axiosConfig);
        const res = response.data;
        dispatch({
          type:FETCH_POSTS,
            payload : res
        });
      } catch (error) {
        console.error(error);
      }


    }
    
  getPosts();
    
    
}

export const createPosts = post => (dispatch) => {
  
  
const axiosConfig = {

    headers: {"Content-Type":'application.json'}
    
}
const base_url = 'http://jsonplaceholder.typicode.com/posts' 

axios.post(base_url,post,axiosConfig).then((response)=>dispatch({
  type:NEW_POST,
  payload : response.config.data  
}));

}
