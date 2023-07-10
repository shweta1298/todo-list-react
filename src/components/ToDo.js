import React, { useContext, useLayoutEffect } from 'react'
import ListColumn from './ListColumn';
import GlobalContext from '../context/GlobalContext';

function ToDo(props) {
    const { itemData } = props;
    const { items, setItems } = useContext(GlobalContext)
    useLayoutEffect(() => {
        setItems({
            todo: itemData.toDoItems,
            inprogress: itemData.inProgressItems,
            done: itemData.doneItems,
        })
    }, [itemData])
    return (
        <div className="main-container">
            <div className="outer-container">
                <div className="header">React To-Do List</div>
                <div className="outer-grid">
                    <ListColumn
                        type="todo"
                        listItems={items.todo}
                        title={"To Do"}
                    />
                    <ListColumn
                        type="inprogress"
                        listItems={items.inprogress}
                        title={"In Progress"}
                    />
                    <ListColumn
                        type="done"
                        listItems={items.done}
                        title={"Done"}
                    />
                </div>
            </div>
        </div>

    );
}

export default ToDo