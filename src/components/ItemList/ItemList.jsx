import Item from "../Item/Item"



const ItemList = ({products}) => {
  return (
    products.map( prod => <Item prod ={prod} key={prod.id} /> )
  )

}

export default ItemList