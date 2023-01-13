import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import Forms from "../../components/Form/Form"
import { useCartContext } from "../../context/CartContext"



const CartContainer = () => {

    const [orderId, setOrderId]= useState()

    const [form, setForm] = useState({name: "",email: "",emailConfirme:"",phone: ""})

    const {cartList,cleanCart, totalPrice, eraseItem,} = useCartContext()

    const [emailConfirm, setEmailConfirm] = useState(false);


    const purchaseOrder =(event) => {

        event.preventDefault()

        const order= {
            buyer: form,
            items: cartList.map(({name,id,price})=>({name,id,price})),
            total: totalPrice()

        }
    

    if(form.email === form.emailConfirme){
        
            const db = getFirestore()
            const queryOrder = collection(db,'orders')
        
            addDoc(queryOrder, order)
            .then( res => setOrderId(res.id))
            .catch(err => console.log(err))
            .finally(()=> {
                cleanCart()
                setForm({ name: "", email: "",emailConfirme:"", phone: ""})
                
                })
        
                
            } else setEmailConfirm(true)  
        
    
        }
    const handleOnChange = (e) => {
        setForm({...form,  [e.target.name]: e.target.value})
        }

return (
    

    <>

        <div className="mx-3">
                {cartList.map(product => <li  key= {product.id}>
                    
                                        {product.name}- 
                                        amount = {product.amount}- 
                                        Price = ${product.price} 
                                        <button onClick=  { () => eraseItem(product.id)}>X</button>
                
                </li>)} 
                {totalPrice() > 0 && <li>Total Price  = ${totalPrice()} </li>}

        </div>

        {cartList.length === 0 ?

            <div>
                {
                    orderId ?

                        <h2> Your order id number :{orderId}</h2>
                    :
                        <Link to='/' >
                            <h2>No hay Productos</h2>
                            <button className="d-flex gap-2 mt-2"> Home </button>
                        </Link>
                }

            </div>

            :
            <Forms  purchaseOrder = {purchaseOrder}  form = {form} handleOnChange={handleOnChange}cleanCart={cleanCart} emailConfirm ={emailConfirm}/>
        }
    </>   

)   
}


export default CartContainer