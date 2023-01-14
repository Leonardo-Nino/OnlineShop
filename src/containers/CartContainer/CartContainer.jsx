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

        <div className= " row d-flex justify-content-center  mx-5 my-5 ">
                {cartList.map(product => 
                                        <div className=" col justify-content-center gap-2 card w-100 mt-5"  key= {product.id}>
                                            <div className="card-header">
                                                {product.name}
                                            </div>
                                            <div className="card-body">
                                                <img src= {product.img} alt={product.name} className='' />
                                                
                                                <br />
                                                Price: ${product.price} <br/>  
                                                Amount = {product.amount} 
                                                <button  onClick=  { () => eraseItem(product.id)}> <img src = "\trash3-fill.svg" alt="cart widget"></img></button>
                                            </div>      
                                        </div>)} 

                                        <h2 className= "row">
                                            {totalPrice() > 0 && <div>Total Price  = ${totalPrice()} </div>}
                                        </h2>

        </div>

        {cartList.length === 0 ?

            <div>
                {
                    orderId ?
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h2>Thanks for your purchase</h2>
                            <h3 > Your order id number :{orderId}</h3>

                        </div>
                    :
                        <div className="d-flex flex-column justify-content-center align-items-center " >
                            <h2 >The cart is empty</h2>
                            <Link to='/' >
                                <button className=" row gap-2 mt-2 "> Home </button>
                            </Link>

                        </div>
                }

            </div>

            :
            <Forms  purchaseOrder = {purchaseOrder}  form = {form} handleOnChange={handleOnChange}cleanCart={cleanCart} emailConfirm ={emailConfirm}/>
        }
    </>   

)   
}


export default CartContainer