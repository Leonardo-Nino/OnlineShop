import Item from "../Item/Item"



const ItemList = ({products}) => {
  return (
    products.map( prod => <Item prod ={prod} /> )
  )

}

export default ItemList