import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import './css/navbar.css'


export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Shaun</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link>Helo</Nav.Link>
                        <Nav.Link>Helo</Nav.Link>
                        <Nav.Link>Helo</Nav.Link>
                        <Nav.Link>Helo</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}