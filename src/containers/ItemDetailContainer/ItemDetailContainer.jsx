
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect,  useState  } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { Spinner } from "react-bootstrap"

import { myFech } from "../../Helpers/myFetch"


const ItemDetailContainer = () => {
const [product, setProduct] = useState({})
const {idProduct} = useParams()
const [ loading, setLoading] = useState(true)

  

useEffect(() =>{   
  const db = getFirestore()
  const querydoc = doc(db, "Products", idProduct)

  getDoc(querydoc)
  .then (res => setProduct  ({id: res.id, ...res.data()}))
  .catch( err => console.log( err ) )
  .finally(()=> setLoading(false)) 
},[])


  return (
    <div>
    { loading ? <Spinner animation="border" /> : <ItemDetail product={product} />}
    </div>


  )
}

export default ItemDetailContainer