import { createContext } from 'react'

const ShopprCartContext = createContext()

export const ShopprCartProvider = ({children}) => {
    return (
        <ShopprCartContext.Provider>
        {children}
        </ShopprCartContext.Provider>
    )
}