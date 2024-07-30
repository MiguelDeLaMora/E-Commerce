import { createContext, useState, useEffect } from 'react'

export const ShopprCartContext = createContext()

export const ShopprCartProvider = ({children}) => {

    // Shopping Card - Increment Quantity
    const [count, setCount] = useState(0)

    // Product Detail - Open/Close
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)

     // Checkout Side Menu - Open/Close
    const [isCheckOutSideMenuOpen, setisCheckOutSideMenuOpen] = useState(false)
    const openCheckOutSideMenu = () => setisCheckOutSideMenuOpen(true)
    const closeCheckOutSideMenu = () => setisCheckOutSideMenuOpen(false)

    // Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart - Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState (null)
    const [filteredItems, setFilteredItems] = useState (null)

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState (null)
    

    // API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response =>response.json())
        .then(data => setItems(data))
      }, [])

      const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        
      }, [items, searchByTitle])

    return (
        <ShopprCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems
        }}>
        {children}
        </ShopprCartContext.Provider>
    )
}