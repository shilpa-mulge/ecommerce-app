import React, { useState, useContext } from "react";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import Econtext from "../store/ecom-context";
import Cart from "../Cart/Cart";
const CardIcone = (props) => {
    const [CartIsShown, setCartIsShown] = useState(false)
    const onShowHandler = () => {
        setCartIsShown(true)
    }
    const onCloseHandler = () => {
        setCartIsShown(false)
    }

    const ctx = useContext(Econtext);
    const totalQuantity = ctx.product.reduce((currentValue, product) => {
        return currentValue += product.amount;
    }, 0)
    return (
        <>
            {CartIsShown && <Cart onClose={onCloseHandler} />}

            <Navbar fixed="top" style={{ width: '100px', left: '90%' }}>
                <Container style={{ justifyContent: 'right' }} >
                    <Button onClick={onShowHandler}>Cart
                        <Badge bg="light" style={{
                            position: 'absolute', color: '#56CCF2',
                            fontSize: '15px'
                        }}>{totalQuantity}</Badge>
                    </Button>
                </Container>
            </Navbar>

        </>
    )
}
export default CardIcone;