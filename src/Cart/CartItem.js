import React from "react";
import { Button } from 'react-bootstrap';
const CartItem = props => {
    return (
        <>
            <td><img style={{ maxWidth: '100px' }} src={props.imageUrl} alt='' /><div>{props.title}</div>
            </td>
            <td>{props.price}</td>
            <td>{props.amount}</td>
            <td>
                <Button variant='danger' onClick={props.onRemove}>-</Button>
                <Button variant='success' onClick={props.onAdd} >+</Button>
            </td>
        </>
    )
}
export default CartItem;