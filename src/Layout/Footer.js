import React from "react";
import you from '../Images/youtube.png';
import spoo from '../Images/SpotifyLogo.png';
import face from '../Images/FacebookLogo.png';
import { Navbar, Nav, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <Navbar bg="secondary" style={{ paddingTop: '40px', display: 'flex-right' }}>
                <Nav className="me-auto">
                    <Navbar.Brand style={{
                        fontSize: '50px',
                    }}>The Generics</Navbar.Brand>
                </Nav>
                <Nav className="ms-auto" style={{ gap: '2rem' }}>
                    <Nav.Item>
                        <Nav.Link href="https://www.youtube.com/" >
                            <Image src={you} style={{ width: '40px' }} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://spotify.com/">
                            <Image src={spoo} style={{ width: '40px' }} />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="https://facebook.com/">
                            <Image src={face} style={{ width: '40px' }} />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </footer>
    )
}
export default Footer;