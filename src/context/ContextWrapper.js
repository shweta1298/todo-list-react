import React, { useMemo, useState } from 'react'
import GlobalContext from './GlobalContext'

export default function ContextWrapper(props) {
    const [source,setSource]=useState({ index:0, listName:"" })
    const [destination,setDestination]=useState({ index:0, listName:"" })
    const [items,setItems]=useState({ todo:[], inprogress:[], done:[] })
    const GlobalContextProviderValue = useMemo(() => (
        {
            source,
            setSource,
            destination,
            setDestination,
            items,
            setItems
        }), [source,destination,items]
    );

    return (
        <GlobalContext.Provider value={GlobalContextProviderValue}>
            {props.children}
        </GlobalContext.Provider>
    )
}