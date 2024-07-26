import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'
import { useContext } from 'react'
import OrderCard from '../../Components/OrderCard'
import { ShopprCartContext } from '../../Context'

const CheckOutSideMenu = () => {
    const context = useContext(ShopprCartContext)
    console.log('Cart: ' , context.cartProduct)

    return (
        <aside className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                     className='h-6 w-6 text-black cursor-pointer'
                     onClick={() => context.closeCheckOutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                        key={product.id}
                        title={product.title} 
                        imageURL={product.image}
                        price={product.price}
                     />
                ))
            }
            </div>
        </aside>
    )
}

export default CheckOutSideMenu