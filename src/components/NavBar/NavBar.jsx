import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    

return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">My Brand</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#product">Products </Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <CartWidget />
    </Navbar.Collapse>
    </Container>
</Navbar>
)
}

export default NavBar