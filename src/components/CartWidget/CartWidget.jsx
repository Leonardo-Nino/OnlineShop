import { useCartContext } from '../../context/CartContext'
import './CartStyle.css'

const CartWidget = () => {
    const {totalProducts} = useCartContext()

    return (
    <div className='text'> 
        <img   src = "/cart-fill.svg" alt="cart widget"></img>
        {totalProducts() > 0 && totalProducts() }
        
    </div> 
    )
}

export default CartWidget