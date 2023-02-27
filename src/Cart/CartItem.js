
import { Button, Col, Row } from 'react-bootstrap';
import classes from './CartItem.module.css';
const CartItem = props => {
    return (
        <>
            <hr />
            <Row key={props.id} className="justify-content-center align-items-center">
                <Col><p>{props.title}</p>
                    <img
                        className={`rounded border shadow ${classes.cart_product_image}`}
                        src={props.imageUrl}
                        alt="Your items added to cart"
                    />
                </Col>
                <Col>
                    <h3 className="fw-bold">x{props.amount}</h3>
                </Col>
                <Col>
                    <h3 className="fw-bold">${props.price}</h3>
                    <Button onClick={props.onRemove} variant="danger">
                        Remove
                    </Button>
                </Col>
            </Row>
        </>
    )
}
export default CartItem;