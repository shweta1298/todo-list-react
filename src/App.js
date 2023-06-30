import { useState } from 'react';
import './App.css';

function App() {
  const [toDoItems, setToDoItems] = useState([
    {
      id: 1,
      title: 1,
    },
    {
      id: 2,
      title: 2,
    },
    {
      id: 3,
      title: 3,
    },

    {
      id: 4,
      title: 4,
    },

    {
      id: 5,
      title: 5,
    },
    {
      id: 6,
      title: 6,
    },

  ])
  const [inProgressItems, setInProgressItems] = useState([
    {
      id: 1,
      title: 1,
    },
    {
      id: 2,
      title: 2,
    },
    {
      id: 3,
      title: 3,
    },
  ])
  const [doneItems, setDoneItems] = useState([
    {
      id: 1,
      title: 1,
    },
  ])

  function onItemDragStart(e) {
    console.log('e :>> ', e.clientX, e.clientY)
  }
  function onItemDragEnd(e) {
    console.log('e end :>> ', e.clientX, e.clientY)
  }
  function onItemDragOver(e,item,index,type) {
    e.preventDefault()
    let destinationIndex=0;
    // if(e.clientY )
   // console.log('e :>> ', e);
// console.log('e.clientY,e.target.clientHeight,e.offsetY :>> ', e.clientY,e.target.clientHeight,e.offsetY);
     console.log('item dragged over :>> ',item,index );
    
  }
  return (
    <div className="main-container">
      <div className="outer-container">
        <div className="header">React To-Do List</div>
        <div className="outer-grid">
          <div className="list-column">
            <div className="list-header">To Do</div>
            <div className="list-container">
              {toDoItems.map((todo_item, index) =>
                <p
                  key={todo_item.id}
                  className='draggable'
                  draggable={true}
                  onDragStart={onItemDragStart}
                  onDragOver={(e)=>onItemDragOver(e,todo_item,index,"todo")}
                  onDragEnd={onItemDragEnd}>
                  {todo_item.title}
                </p>
              )}
            </div>
          </div>
          <div className="list-column">
            <div className="list-header">In Progress</div>
            <div className="list-container">
              {inProgressItems.map((inprogress_item, index) =>
                <p
                  key={inprogress_item.id}
                  className='draggable'
                  draggable={true}
                  onDragOver={(e)=>onItemDragOver(e,inprogress_item,index,"inprogress")}
                  onDragStart={onItemDragStart}
                  onDragEnd={onItemDragEnd}>
                  {inprogress_item.title}
                </p>
              )}
            </div>
          </div>
          <div className="list-column">
            <div className="list-header">Done</div>
            <div className="list-container">
              {doneItems.map((done_item, index) =>
                <p
                  key={done_item.id}
                  className='draggable'
                  draggable={true}
                  onDragStart={onItemDragStart}
                  onDragOver={(e)=>onItemDragOver(e,done_item,index,"done")}
                  onDragEnd={onItemDragEnd}>
                  {done_item.title}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
