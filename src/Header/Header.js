import React from "react";
import { Nav, Navbar, Container, Button, Badge } from "react-bootstrap";
const Header = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" expand="lg" >
                <Container >
                    <Nav className="mx-auto" >
                        <Nav.Link href="#home" style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Home</Nav.Link>
                        <Nav.Link href="#link" style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>Store</Nav.Link>
                        <Nav.Link href="#About" style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }}>About</Nav.Link>
                    </Nav>
                    <Button>Cart
                        <Badge bg="light" style={{
                            position: 'absolute', color: '#56CCF2',
                            fontSize: '15px'
                        }}>0</Badge>
                    </Button>
                </Container>
            </Navbar>
        </>
    )
}
export default Header;