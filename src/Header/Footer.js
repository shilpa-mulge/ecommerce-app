import React from "react";
import you from '../Images/youtube.jpg';
import spoo from '../Images/SpotifyLogo.png';
import face from '../Images/FacebookLogo.png';
import { Navbar, Nav, Container } from "react-bootstrap";
const Footer = () => {
    return (
        <>
            <div style={{ paddingTop: '40px' }}>
                <Navbar bg="primary" variant="dark" >
                    <Container style={{
                        padding: '20px'
                    }}>
                        <Navbar.Brand style={{
                            fontSize: '50px',
                            margin: 'auto'
                        }}>The Generics</Navbar.Brand>
                        <Nav className="me-left">
                            <Nav.Link href="https://www.youtube.com/">
                                <img
                                    src={you}
                                    width="50"
                                    height="50"
                                    alt=""
                                />
                            </Nav.Link>
                            <Nav.Link href="https://spotify.com/">  <img
                                src={spoo}
                                width="50"
                                height="50"
                                alt=""
                            /></Nav.Link>
                            <Nav.Link href="https://facebook.com/">
                                <img
                                    src={face}
                                    width="50"
                                    height="50"
                                    alt=""
                                />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}
export default Footer;