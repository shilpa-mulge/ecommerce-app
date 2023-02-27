import React from "react";
import { Navbar } from "react-bootstrap";
const Header = () => {
    return (
        <>
            <Navbar bg="secondary" expand='lg' varient='dark' style={{
                padding: '50px', justifyContent: 'center', flexWrap: "wrap"
            }} >
                <Navbar.Brand style={{
                    fontSize: '60px',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 'auto'
                }} >The Generics</Navbar.Brand>
            </Navbar>
        </>
    )
}
export default Header;