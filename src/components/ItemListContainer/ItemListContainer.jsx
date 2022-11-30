

 const Greeting = (props) => {
    return(
        <h2>{props.greeting}</h2>
    )
} 

const ItemListContainer = () => {   

    let saludo = "Saludos"

    return (
    <div> 
        <Greeting greeting = {saludo}  />
    </div>
  )
}

export default ItemListContainer