import React from "react";
import { Navbar, Container } from "react-bootstrap";
const HeaderTitle = () => {

    return (
        <>
            <Navbar bg="secondary" varient='dark' >
                <Container style={{
                    padding: '40px'
                }}>
                    <Navbar.Brand style={{
                        fontSize: '60px',
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 'auto'
                    }} >The Generics</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
export default HeaderTitle;