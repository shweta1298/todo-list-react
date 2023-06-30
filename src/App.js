import './App.css';
import ListColumn from './components/ListColumn';

function App() {
  // const [toDoItems, setToDoItems] = useState([
  //   {
  //     id: 1,
  //     title: 1,
  //   },
  //   {
  //     id: 2,
  //     title: 2,
  //   },
  //   {
  //     id: 3,
  //     title: 3,
  //   },

  //   {
  //     id: 4,
  //     title: 4,
  //   },

  //   {
  //     id: 5,
  //     title: 5,
  //   },
  //   {
  //     id: 6,
  //     title: 6,
  //   },

  // ])
  // const [inProgressItems, setInProgressItems] = useState([
  //   {
  //     id: 7,
  //     title: 7,
  //   },
  //   {
  //     id: 8,
  //     title: 8,
  //   },
  //   {
  //     id: 9,
  //     title: 9,
  //   },
  // ])
  // const [doneItems, setDoneItems] = useState([
  //   {
  //     id: 10,
  //     title: 10,
  //   },
  // ])

  // const [sourceIndex, setSourceIndex] = useState(0)
  // const [destinationIndex, setDestinationIndex] = useState(0)
  // const [sourceList, setSourceList] = useState("")
  // const [targetList, setTargetList] = useState("")
  // function onItemDragStart(e, index, type) {
  //   console.log('e :>> ', e);
  //   setSourceIndex(index)
  //   setSourceList(type)
  // }
  // function addItem(item) {
  //   if (targetList === "todo") {
  //     toDoItems.splice(destinationIndex, 0, item)
  //     setToDoItems([...toDoItems])
  //   }
  //   else if (targetList === "inprogress") {
  //     inProgressItems.splice(destinationIndex, 0, item)
  //     setInProgressItems([...inProgressItems])
  //   }
  //   else {
  //     doneItems.splice(destinationIndex, 0, item)
  //     setDoneItems([...doneItems])
  //   }
  // }
  // function removeItem() {
  //   if (sourceList === "todo") {
  //     toDoItems.splice(sourceIndex, 1)
  //     setToDoItems([...toDoItems])
  //   }
  //   else if (sourceList === "inprogress") {
  //     inProgressItems.splice(sourceIndex, 1)
  //     setInProgressItems([...inProgressItems])
  //   } else {
  //     doneItems.splice(sourceIndex, 1)
  //     setDoneItems([...doneItems])
  //   }

  // }
  // function onItemDragEnd(e, item) {
  //   // console.log('e end :>> ', e.clientX, e.clientY)
  //   removeItem()
  //   addItem(item)
  // }
  // function onItemDragOver(e, index, type) {
  //   e.preventDefault()
  //   let destinationIndex = e.clientY - e.target.offsetTop < 15 ? index : index + 1;
  //   setDestinationIndex(destinationIndex)
  //   setTargetList(type)

  // }
  const toDoItems = [
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
    {
      id: 7,
      title: 7,
    },
    {
      id: 8,
      title: 8,
    },
    {
      id: 9,
      title: 9,
    },
    {
      id: 10,
      title: 10,
    },
    {
      id: 11,
      title: 11,
    },
  ]
  const inProgressItems = [
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
  ]
  const doneItems = [
    {
      id: 1,
      title: 1,
    },
  ]
  return (
    <div className="main-container">
      <div className="outer-container">
        <div className="header">React To-Do List</div>
        <div className="outer-grid">
          <ListColumn
            type="todo"
            items={toDoItems}
            title={"To Do"}
          />
          <ListColumn
            type="inprogress"
            items={inProgressItems}
            title={"In Progress"}
          />
          <ListColumn
            type="done"
            items={doneItems}
            title={"Done"}
          />
        </div>
      </div>
    </div>

  );
}

export default App;
