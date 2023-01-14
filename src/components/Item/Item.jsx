import { Link } from "react-router-dom"

const Item = ({prod}) => {
return (
    <div className='col-md-3 mx-2 my-3' > 
        <Link  to= {`/detail/${prod.id}`}>                                  
            <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {` ${prod.name} `}
                    </div> 
                    <div className="card-body">
                        <img src= {prod.img} alt={prod.name} className='' />
                        
                        <br />
                        Price: ${prod.price}   
                    </div>                                                                                   
            </div>  
        </Link>  
</div>
    )   
}

export default Item