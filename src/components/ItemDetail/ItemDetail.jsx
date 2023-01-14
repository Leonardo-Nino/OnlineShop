
import {useState } from "react";
import {useCartContext } from "../../context/CartContext";
import ButtonSwichCart from '../ButtonSwichCart/ButtonSwichCart'
import Counter from '../Counter/Counter'



const ItemDetail = ({product}) => {

  const {addToCart}= useCartContext()

  const [inputType, setInputType] = useState('Counter')


  const onAdd =(amount)=>  {
      setInputType('swithCart')
      addToCart({...product, amount})
  }
  

  return (  
    <div className= 'row mx-3 d-flex justify-content-center'>

      <div className=   "card w-25 mt-5 'col ms-2'" >
          <div className="card-header">{product.name} </div> 
          <div className="card-body">
            <img src= {product.img} alt={product.name} className='' /><br />
                        Price: €{product.price}   
          </div>  
          <div className='d-flex'>{
                inputType === 'Counter' ? 
                    <Counter  stock={10} initial={1} onAdd={onAdd} /> 
                : 
                    <ButtonSwichCart  />
            }
          </div>                                                                      
      </div>  
        
    </div>
  )
}

export default ItemDetail