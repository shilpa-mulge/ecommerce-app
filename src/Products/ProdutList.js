import React, { useContext, useState } from "react";
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Econtext from "../store/ecom-context";
const ProductList = (props) => {
    const ctx = useContext(Econtext);
    const [isAdded, setIsAdded] = useState(false)
    const Navigate = useNavigate();
    async function onAddHandler() {
        try {
            const response = await axios.post(`https://crudcrud.com/api/c85402ca53d34aa5a17ffcbc50662422/${ctx.email}`, {
                title: props.title,
                price: props.price,
                imageUrl: props.imageUrl,
                amount: 1
            })

            ctx.onShowCart()
            setIsAdded(true)
        } catch (err) {
            alert(err.message)
        }
    }
    function ShowDetailsOfPro() {
        ctx.onShowDetails({
            imageUrl: props.imageUrl,
            title: props.title,
            price: props.price,
            amount: 1
        })
    }
    function onShowHandler() {
        Navigate(`/Login/Cart/${ctx.token}`)
        ctx.onShowCart()
    }
    return <>

        <Card style={{ width: 'auto', border: 'none' }}>
            <Card.Title style={{ textAlign: 'center' }}>{props.title}</Card.Title>
            <Card.Body>
                <Link to={`/Product/${props.id}`} onClick={ShowDetailsOfPro}>
                    <Card.Img variant="top" src={props.imageUrl} />   </Link>
            </Card.Body>
            <Card.Text>
                ${props.price}
                <Button variant="dark" style={{ float: 'right' }} onClick={!isAdded ? onAddHandler : onShowHandler}>{isAdded ? 'go to cart' : 'Add to cart'}
                </Button>
            </Card.Text>
        </Card>

    </>
}
export default ProductList;