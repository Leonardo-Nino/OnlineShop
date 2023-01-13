import { Link } from "react-router-dom"

const Item = ({prod}) => {
return (
    <div className='col-md-3' > 
       <Link  to= {`/detail/${prod.id}`}>                                  
            <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {` Name: ${prod.name} - Category: ${prod.category}`}
                    </div> 
                    <div className="card-body">
                        <img src= "" alt='Te debo las fotos' className='w-50' />
                        <br />
                        Price: ${prod.price}   
                    </div>                                                                                   
            </div>  
        </Link>  
</div>
    )
}

export default Item