import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopprCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import './App.css'

const AppRoutes = () => {
  
    let routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/clothing-men', element: <Home />},
      {path: '/clothing-woman', element: <Home />},
      {path: '/jewelery', element: <Home />},
      {path: '/electronics', element: <Home />},
      {path: '/others', element: <Home />},
      {path: '/my-account', element: <MyAccount />},
      {path: '/my-order', element: <MyOrder />},
      {path: '/my-orders', element: <MyOrders />},
      {path: '/my-orders/last', element: <MyOrder />},
      {path: '/my-orders/:id', element: <MyOrder />},
      {path: '/*', element: <NotFound />},
      {path: '/sign-in', element: <SignIn />},
    ])
return routes
}



const App = () => {
  return (
    
    <ShopprCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
       <CheckOutSideMenu />
      </BrowserRouter>
    </ShopprCartProvider>
    
  )
}

export default App
