import { Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    

return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Link className= "navbar-brand" to ='/'>SWITCH GAMES</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link className='nav-link' to ='/category/exclusive'>Only in Switch</Link>
            <Link className='nav-link' to ='/category/arcade'>Arcade</Link>
            <Link className='nav-link' to ='/category/strategy'>Strategy</Link>
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