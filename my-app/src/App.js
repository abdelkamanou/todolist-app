import React, { Component } from 'react'
import Additem from './Components/Additem/Additem'
import Todolist from './Components/Todolist/Todolist'


 class App extends Component {
state= {
  items : [
    {id:1,name:"Dean", age:19},
    {id:2,name:"Sam", age:15},
    {id:3,name:"Ach", age:16},
    {id:4,name:"Shico", age:17}
  ]
}


DeleteItem= (id)=> {
  let items=this.state.items;
 //items.filter(item =>{ return item.id !==id})
let i = items.findIndex(item=>item.id===id);
  items.splice(i,1);
  this.setState({items});
  
}
addItem = (item)=>{
  item.id= Math.random();
  let items = this.state.items;
  items.push(item);
  this.setState({items})
}
  render() {
    return (
      <div className="App container">
        <h1 className='text-center'>Todolist App</h1> 
        <Todolist items={this.state.items}  DeleteItem={this.DeleteItem} />
        <Additem addItem={this.addItem}/>
      </div>
    )
  }
}


export default App