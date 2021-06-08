import React from 'react'

 const Todolist = (props) => {
     const {items,DeleteItem}= props;
     
     const Listitems= items.length ?(items.map(item=> {return(
         <div key= {item.id}>
         <span className='name'>{item.name} </span>
         <span className="age" >{item.age} </span>
         <span className='action icon' onClick={()=>DeleteItem(item.id)} >&times;</span>
         </div>
     )
    })) : (<p>no item to show</p>)
    return (
        <div className='ListItems'>
            <div>
                <span className='name title'>Name</span>
                <span className= 'age title'>Age</span>
                <span className="action title" >Action</span>

            </div>
            {Listitems}
        </div>
    )
}
export default Todolist