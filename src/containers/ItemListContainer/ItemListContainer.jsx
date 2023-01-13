import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemList from "../../components/ItemList/ItemList"
import { myFech } from "../../Helpers/myFetch"
import { Spinner } from "react-bootstrap"
import {collection, getDocs, getFirestore, orderBy, query, where} from "firebase/firestore"




const ItemListContainer = ({greeting}) => { 
    
  const [products, setProducts] =useState([])
  const [ loading, setLoading ] = useState(true) 
  const {idCategory} = useParams()
    

useEffect (()=>{

    const db = getFirestore()

    const queryCollection = collection(db,"Products")

    const queryFilteredOut=idCategory? query(queryCollection , where("category", "==", idCategory)) :queryCollection
    
    
    getDocs(queryFilteredOut)
    .then (res => setProducts(res.docs.map(product => ({id: product.id, ...product.data()})))) 
    .catch( err => console.log( err ) )
    .finally(()=> setLoading(false)) 
    

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