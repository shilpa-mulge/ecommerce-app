import React, { useState } from "react";
import CardIcone from "../Header/CardIcone";
import { Row, Container, Col, Button } from "react-bootstrap";
import ProductList from "./ProdutList";
import Cart from "../Cart/Cart";
const Product = (props) => {
    const productsArr = [

        {
            id: 'e1',
            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {
            id: 'e2',
            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {
            id: 'e3',
            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {
            id: 'e4',
            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]
    const [CartIsShown, setCartIsShown] = useState(false)
    const onShowHandler = () => {
        setCartIsShown(true)
    }
    const onCloseHandler = () => {
        setCartIsShown(false)
    }


    return (
        <>
            <CardIcone />
            <div className="container">
                <h2 style={{ textAlign: 'center', padding: '40px' }}>PRODUCTS</h2>
            </div>
            <Container>
                <Row md={2} style={{ justifyContent: "space-between", gridRowGap: "80px" }} >
                    {productsArr.map((item) => (
                        <Col className="d-none d-lg-flex justify-content-center" style={{ width: '500px' }} key={item.id} >
                            <ProductList id={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl} />                       </Col>

                    ))}
                </Row>
            </Container>


            <div style={{ textAlign: 'center' }}>
                {CartIsShown && <Cart onClose={onCloseHandler} />}
                <Button variant="secondary" style={{ color: '#56CCF2' }} onClick={onShowHandler}>See the cart</Button>
            </div>





        </>
    )
}
export default Product;