import { createContext } from 'react'

const GlobalContext = createContext({
    source:{},
    destination:{},
    items:{},
})

export default GlobalContext;