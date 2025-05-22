import React, { Component } from 'react'
import TodoList from './List'

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       inputData:"",
       todoItems:['Do Excersice']
    }
  }
  changeTodoInput=(event)=>{
    this.setState({inputData:event.target.value});
    console.log({inputData:event.target.value});
  }
  handleSubmit=(event)=>{
       if(this.state.inputData!=''){
        let newItem = [...this.state.todoItems,this.state.inputData]
        this.setState({
          todoItems:newItem,
          inputData:""
        });
       }
  }

    handleDelete = (indexToDelete) => {
      const newItems = this.state.todoItems.filter((_, index) => index !== indexToDelete);
      this.setState({ todoItems: newItems });     
      };
  render() {
    return (
     <>
        <div className='container my-3'>
        <div className='row justify-content-center'>
        <div className='col-md-10' style={{border:"2px solid",borderRadius:"50px", padding:"30px"}} >       
        <form>
          <h1>Todo App</h1>
            <div className="mb-3">              
                <input type="text" className="form-control" id="todo" onChange={this.changeTodoInput} value={this.state.inputData} />          
            </div>            
            <button onClick={this.handleSubmit} type="button" className="btn btn-primary">ADD</button>
        </form>
        <TodoList items={this.state.todoItems} deleteItem={this.handleDelete}/>
         </div>
        </div>
        </div>
     </>
    )
  }
}
