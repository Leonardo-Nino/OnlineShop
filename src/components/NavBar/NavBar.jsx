import { Link, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    

return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Link className= "navbar-brand" to ='/'>My Brand</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link className='nav-link' to ='/category/first'>Category 1 </Link>
            <Link className='nav-link' to ='/category/second'>Category 2</Link>
            <Link to= '/'></Link>
            </Nav>
            <Link to='/cart'>
            <CartWidget />
            </Link>
        </Navbar.Collapse>
    </Container>
</Navbar>
)
}

export default NavBar