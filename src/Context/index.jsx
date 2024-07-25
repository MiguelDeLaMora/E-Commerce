import { createContext, useState } from 'react'

export const ShopprCartContext = createContext()

export const ShopprCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)



    return (
        <ShopprCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
        }}>
        {children}
        </ShopprCartContext.Provider>
    )
}