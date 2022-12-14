import React from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({product}) => {

const onAdd =(amount)=> alert(`You added ${amount}  products to cart`)

  return (
    <div className='row'>
      <div className='col ms-2'>
        <h2>{product.name}</h2>
        <h2> Price ${product.price}</h2>
      </div>  
      <div className='col'>
        <Counter stock={6} initial={1} onAdd={onAdd} />      
      </div>
    </div>
  )
}

export default ItemDetail