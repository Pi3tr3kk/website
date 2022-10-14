import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import './css/navbar.css'


export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand className= "brand">Shaun</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav">
                        <Nav.Link href="commands" className="navbutton">Commands</Nav.Link>
                        <Nav.Link className="navbutton">Credits</Nav.Link>
                        <Nav.Link className="navbutton">Privacy Policy</Nav.Link>
                        <Nav.Link className="navbutton">Terms of use</Nav.Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}