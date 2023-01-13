import { Link } from "react-router-dom"


const ButtonSwichCart = () => {



    return (
        <>
            <Link to='/cart' >
                <button  className="d-flex gap-2 mt-2"> Purchase</button>
            </Link>
            
            <Link to='/' >
                <button  className="d-flex gap-2 mt-2">Keep buying</button>
            </Link>
        </>
    )
}



export default ButtonSwichCart