import './App.css';
import ToDo from './components/ToDo';

function App() {
  let itemData = {
    toDoItems: [
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
    ],
    inProgressItems: [
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
    ],
    doneItems: [
      {
        id: 1,
        title: 1,
      },
    ]
  }

  return (
    <ToDo itemData={itemData} />
  );
}

export default App;
