import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
function ListColumn(props) {
    const {
        items,
        title,
        type,
    } = props

    const { source, destination, setSource, setDestination } = useContext(GlobalContext);
    function onContainerDragOver(e) {
        // console.log('e', e)
        e.preventDefault()
        setDestination({
            index: items.length,
            listName: type,
        })
    }

    function onItemDragStart(e, index, item) {
        setSource({
            index: index + 1,
            listName: type,
        })
        // console.log('drag start :>> ', e, item);
    }
    function onItemDragOver(e, index, item) {
        e.preventDefault()
        e.stopPropagation()
        setDestination({
            index: index + 1,
            listName: type,
        })
        // console.log('drag over :>> ', e, item);
    }
    function onItemDragEnd(e, item) {
         console.log('source,destination', source,destination)
        // console.log('drag end :>> ', e, item);
    }
    //console.log('source,destination', source, destination)

    return (
        <div >
            <div className="list-header">{title}</div>
            <div className="list-container" onDragOver={onContainerDragOver} >
                {items.map((item, index) =>
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