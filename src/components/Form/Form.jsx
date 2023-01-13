import { Form } from "react-bootstrap"


            const Forms = ({purchaseOrder,form,handleOnChange, cleanCart, emailConfirm}) => {
return (
    <div className="mx-3"> 
                
                <Form onSubmit={purchaseOrder}>
                    <Form.Group className="mb-3 w-50" >
                        <Form.Label>Names</Form.Label>
                        <Form.Control type="text" name="name"  onChange={handleOnChange}  value={form.name}placeholder="Enter full name" required />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" name="phone" onChange={handleOnChange}  value={form.phone} placeholder="Enter phone" required />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleOnChange}  value={form.email} placeholder="Enter email" required />
                        <Form.Label>Confirm email</Form.Label>
                        <Form.Control type="email" name="emailConfirme" onChange={handleOnChange}  value={form.emailConfirm} placeholder="Confirn enail" required />
                        
                        {emailConfirm ? <p className='text-danger'>El email debe coincidir</p> : ''}
                    
                    </Form.Group>
                    <button  onClick={cleanCart }> Clean Cart</button>
                    <button>Generate Order</button>
                </Form>
            </div>

)
}

export default Forms