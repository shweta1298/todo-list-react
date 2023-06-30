import React from 'react'

function ListColumn(props) {
    const {
        items,
        title,
        // /type,
    } = props
    function onItemDragStart(e, item) {
        console.log('drag start :>> ', e, item);
    }
    function onItemDragOver(e, item) {
        console.log('drag over :>> ', e, item);
    }
    function onItemDragEnd(e, item) {
        console.log('drag end :>> ', e, item);
    }
    return (
        <div >
            <div className="list-header">{title}</div>
            <div className="list-container">
                {items.map((item, index) =>
                    <p
                        key={item.id}
                        className='draggable'
                        draggable={true}
                        onDragStart={(e)=>onItemDragStart(e,item)}
                        onDragOver={(e)=>onItemDragOver(e,item)}
                        onDragEnd={(e)=>onItemDragEnd(e,item)}
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