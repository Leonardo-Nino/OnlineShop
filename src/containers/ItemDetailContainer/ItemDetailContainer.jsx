
import { useEffect,  useState  } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { myFech } from "../../Helpers/myFetch"


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const {idProduct} = useParams()

  useEffect( ()=>{
    myFech(idProduct)
      .then( resp =>  setProduct(resp) ) 
      .catch( err => console.log( err ) )
      //.finally(()=> setLoading(false))  
  },[])


  return (
<ItemDetail product={product} />
  )
}

export default ItemDetailContainer