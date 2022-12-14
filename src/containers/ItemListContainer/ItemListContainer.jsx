import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemList from "../../components/ItemList/ItemList"
import { myFech } from "../../Helpers/myFetch"
import { Spinner } from "react-bootstrap"

const ItemListContainer = ({greeting}) => { 
    
  const [products, setProducts] =useState([])
  const [ loading, setLoading ] = useState(true) 
  const {idCategory} = useParams()
    

useEffect (()=>{

  if(idCategory){
    myFech()
    .then( resp =>  setProducts(resp.filter(products => products.category === idCategory)) ) 
    .catch( err => console.log( err ) )
    .finally(()=> setLoading(false))    

  }else{

    myFech()
    .then( resp =>  setProducts(resp) ) 
    .catch( err => console.log( err ) )
    .finally(()=> setLoading(false))    
  }

},[idCategory])

    return (
    <>
    
    <h2 className="ms-3">{greeting}</h2>
    <div className="d-flex flex-wrap justify-content-center gap-2" >
          { loading ? <Spinner animation="border" />: <ItemList products={products}  />}
    </div>
    </>


    )
}

export default ItemListContainer    