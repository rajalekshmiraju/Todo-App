import React, {Component} from 'react';
import "./TodoApp.css";
export class TodoApp extends Component{
    state = {
        input : "juhytfq  ",
        items : []
    
    };
handleChange = event => {
    this.setState({
        input: event.target.value
    });
  
};

storeItems = event => {
event.preventDefault();
    const { input } = this.state;
    
    this.setState({
        items : [...this.state.items, input],
        input: ""
    });

};
deleteIteam =key=>{
    const alliteams = this.state.items;
    alliteams.splice(key, 1);
    this.setState({
        items:alliteams
    })
}

    render(){
        const { input, items} = this.state;
        
        return(
            <div className="todo-container">
<h1>TodooAoo</h1>
<form className="input-section" onSubmit={this.storeItems}>
    <input type="text"  value= {input} onChange={this.handleChange} placeholder="enter iteam"/>
    
    </form>
<ul>
   {items.map((data,index )=>(
 <li key={index}>
     {data}  <i className="fas fa-trash-alt" onClick={() =>this.deleteIteam(index)}></i></li>
   )
  

   )}
    
</ul>
            </div>
        );
    }
}
export default TodoApp;