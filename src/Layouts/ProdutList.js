import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import Econtext from "../store/ecom-context";
const ProductList = (props) => {
    const ctx = useContext(Econtext);
    const onAddHandler = () => {
        ctx.OnAddProd({
            id: props.id,
            imageUrl: props.imageUrl,
            title: props.title,
            price: props.price,
            amount: 1
        })
    }
    return <>
        <Card style={{ width: 'auto', border: 'none' }}>
            <Card.Title style={{ textAlign: 'center' }}>{props.title}</Card.Title>
            <Card.Body>
                <Card.Img variant="top" src={props.imageUrl} />
            </Card.Body>
            <Card.Text>
                ${props.price}
                <Button variant="dark" style={{ float: 'right' }} onClick={onAddHandler}>Add to cart
                </Button>

            </Card.Text>
        </Card>
    </>
}
export default ProductList;