import { useState } from 'react';
import './App.css';

function App() {
  const [toDoItems, setToDoItems] = useState([
    {
      title: 1,
    },
    {
      title: 2,
    },
    {
      title: 3,
    },

    {
      title: 4,
    },

    {
      title: 5,
    },

    {
      title: 6,
    },

  ])
  const [inProgressItems, setInProgressItems] = useState([
    {
      title: 1,
    },
    {
      title: 2,
    },
    {
      title: 3,
    },
  ])
  const [doneItems, setDoneItems] = useState([
    {
      title: 1,
    },

  ])

  function onItemDragStart(e) {
    console.log('e :>> ', e.clientX, e.clientY)
  }
  function onItemDragEnd(e) {
    console.log('e end :>> ', e.clientX, e.clientY)
  }
  return (
    <div className="main-container">
      <div className="outer-container">
        <div className="header">React To-Do List</div>
        <div className="outer-grid">
          <div className="list-column">
            <div className="list-header">To Do</div>
            <div className="list-container">
              <p className='draggable'
                draggable="true"

              >1</p>
              <p className='draggable' draggable="true">2</p>
              <p className='draggable' draggable="true">3</p>
              <p className='draggable' draggable="true">1</p>
              <p className='draggable' draggable="true">2</p>
              <p className='draggable' draggable="true">3</p>
              <p className='draggable' draggable="true">1</p>
              <p className='draggable' draggable="true">2</p>
              <p className='draggable' draggable="true">3</p>
              <p className='draggable' draggable="true">1</p>
              <p className='draggable' draggable="true">2</p>
              {/* <p className='draggable' draggable="true">3</p>
              <p className='draggable' draggable="true">1</p>
              <p className='draggable' draggable="true">2</p>
              <p className='draggable' draggable="true">3</p> */}
            </div>

          </div>

          <div className="list-column">
            <div className="list-header">In Progress</div>
            <div className="list-container">
              <p className='draggable' draggable="true">4</p>
              <p className='draggable' draggable="true">5</p>
            </div>


          </div>
          <div className="list-column">
            <div className="list-header">Done</div>
            <div className="list-container">
              <p className='draggable' draggable="true">6</p>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
