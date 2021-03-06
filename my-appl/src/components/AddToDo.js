import  {Component} from 'react';

export class AddToDo extends Component {
    
    state = 
        {
            title:""
        }
    
    onChange = (e) => this.setState({[e.target.name]:e.target.value});
    
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({title:''});
                
    }
    
    render() {
        return (
            
              <form  onSubmit={this.onSubmit} style={{display:'flex'}}>
                  
              <input 
              type="text" 
              name="title" 
              style={{flex:'10'}}
              placeholder="Add ToDo ..." 
              value = {this.state.title}
              onChange={this.onChange}
               />
              <input type="submit" value = "Submit" className="submitbtn"  style={{flex:'1'}} />

              
              </form>  
            
        )
    }
}

export default AddToDo;
