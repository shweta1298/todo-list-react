import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
function ListColumn(props) {
    const {
        listItems,
        title,
        type,
    } = props

    const { source, destination, setSource, setDestination, items, setItems } = useContext(GlobalContext);
    function onContainerDragOver(e) {
        e.preventDefault()
        setDestination({
            ...destination,
            listName: type,
        })
    }

    function onItemDragStart(e, index, item) {
        setSource({
            index: index,
            item:item,
            listName: type,
        })
        // if(source.listName==="todo"){
        //     let newItems = [...items.todo]
        //     newItems.splice(source.index, 1)
        //     setItems(
        //         {
        //             todo: [...newItems],
        //             done: items.done,
        //             inprogress: items.inprogress,
        //         }
        //     )
        // }
        // else if(source.listName==="inprogress"){

        // }
        // else{

        // }
        // console.log('drag start :>> ', e, item);
    }
    function onItemDragOver(e, index, item) {
        e.preventDefault()
        e.stopPropagation()
        // console.log('e :>> ', e);
    
        const itemHeight = e.target.clientHeight
        let destinationIndex;
        if (e.clientY - e.target.offsetTop <= (itemHeight / 2)) {
            if (index === 0)
                destinationIndex = index
            else
                destinationIndex = index

        } else {
            if (index === listItems.length - 1) {
                destinationIndex = listItems.length
            }
            else {
                destinationIndex = index + 1
            }
        }
        setDestination({
            index: destinationIndex,
            listName: type,
        })
    }
    function onItemDragEnd(e, item) {
        console.log('source,destination', source, destination)
         console.log('drag end :>> ', e, item);
        if (destination.listName === "todo") {
            let newItems = [...items.todo]
            newItems.splice(destination.index, 0, source.item)
            setItems(
                {
                    todo: [...newItems],
                    done: items.done,
                    inprogress:items.inprogress,
                }
            )
        }
        else if (destination.listName === "inprogress") {
            let newItems = [...items.inprogress]
            newItems.splice(destination.index, 0, source.item)
            setItems(
                {
                    todo: items.todo,
                    done: items.done,
                    inprogress: [...newItems],
                }
            )
        }
        else {
            let newItems = [...items.done]
            newItems.splice(destination.index, 0, source.item)
            setItems(
                {
                    todo: items.todo,
                    done: [...newItems],
                    inprogress: items.inprogress,
                }
            )
        }
       
    }
    //console.log('source,destination', source, destination)

    return (
        <div >
            <div className="list-header">{title}</div>
            <div className="list-container" onDragOver={onContainerDragOver} >
                {listItems.map((item, index) =>
                    <p
                        key={item.id}
                        className='draggable'
                        draggable={true}
                        onDragStart={(e) => onItemDragStart(e, index, item)}
                        onDragOver={(e) => onItemDragOver(e, index, item)}
                        onDragEnd={(e) => onItemDragEnd(e, item)}
                    // onDragStart={dragStart}
                    // onDragOver={(e)=>dragOver(e, index, type)}
                    // onDragEnd={(e)=>dragEnd(e, item)}>
                    >
                        {item.title}
                    </p>
                )}
            </div>
        </div>
    )
}

export default ListColumn