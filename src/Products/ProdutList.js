import React, { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Econtext from "../store/ecom-context";
const ProductList = (props) => {
    const ctx = useContext(Econtext);
    const [isAdded, setIsAdded] = useState(false)
    const Navigate = useNavigate();
    function onAddHandler() {
        fetch(`https://crudcrud.com/api/387e01a5c90a47bab00656cb7079acde/${ctx.email}`, {
            method: 'POST',
            body: JSON.stringify({
                title: props.title,
                price: props.price,
                imageUrl: props.imageUrl,
                amount: 1
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async response => {
            if (response.ok) {
                ctx.onShowCart()
                return response.json()
            } else {
                const data = await response.json();
                let error = "Something went wrong";
                if (data && data.error && data.error.message) {
                    error = data.error.message;
                }
                throw new Error(error);
            }
        }).then(data => {
            setIsAdded(true)
        }).catch(err => {
            alert(err)
        })
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