import React from "react";
import { Card, Row, Container, Col, Button } from "react-bootstrap";

const Product = (props) => {
    const productsArr = [

        {

            title: 'Colors',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        },

        {

            title: 'Black and white Colors',

            price: 50,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        },

        {

            title: 'Yellow and Black Colors',

            price: 70,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        },

        {

            title: 'Blue Color',

            price: 100,

            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        }

    ]


    return (
        <>
            <div className="container">
                <h2 style={{ textAlign: 'center', padding: '40px' }}>PRODUCTS</h2>
            </div>
            <Container>
                <Row md={2} style={{ justifyContent: "space-between", gridRowGap: "80px" }} >
                    {productsArr.map((item) => (
                        <Col className="d-none d-lg-flex justify-content-center" style={{ width: '500px' }} >
                            <Card style={{ width: '300px', border: 'none' }}>
                                <Card.Title style={{ textAlign: 'center' }}>{item.title}</Card.Title>
                                <Card.Body>
                                    <Card.Img variant="top" src={item.imageUrl} />
                                </Card.Body>
                                <Card.Text>
                                    ${item.price}
                                    <Button variant="dark" style={{ float: 'right' }}>Add to cart
                                    </Button>

                                </Card.Text>
                            </Card>
                        </Col>

                    ))}
                </Row>
            </Container>


            <div style={{ textAlign: 'center' }}>
                <Button variant="secondary" style={{ color: '#56CCF2' }}>See the cart</Button>
            </div>





        </>
    )
}
export default Product;