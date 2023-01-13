
import {useState } from "react";
import {useCartContext } from "../../context/CartContext";
import ButtonSwichCart from '../ButtonSwichCart/ButtonSwichCart'
import Counter from '../Counter/Counter'



const ItemDetail = ({product}) => {

  const {addToCart, cartList}= useCartContext()

  const [inputType, setInputType] = useState('Counter')


  const onAdd =(amount)=>  {
      setInputType('swithCart')
      addToCart({...product, amount})
  }
  

  return (  
    <div className='row'>
      <div className='col ms-2'>
        <h2>{product.name}</h2>
        <h2> Price ${product.price}</h2>
      </div>  
      <div className='col'>{
                inputType === 'Counter' ? 
                    <Counter stock={10} initial={1} onAdd={onAdd} /> 
                : 
                    <ButtonSwichCart />
            }
      </div>
    </div>
  )
}

export default ItemDetail