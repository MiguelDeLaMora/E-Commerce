import { createContext, useState } from 'react'

export const ShopprCartContext = createContext()

export const ShopprCartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    return (
        <ShopprCartContext.Provider value={{
            count,
            setCount
        }}>
        {children}
        </ShopprCartContext.Provider>
    )
}