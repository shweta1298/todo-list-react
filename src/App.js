import './App.css';
import ListColumn from './components/ListColumn';

function App() {
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
