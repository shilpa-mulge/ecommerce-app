import React, { useContext } from 'react';
import Econtext from '../store/ecom-context';
import { Table, Modal, Button, CloseButton } from 'react-bootstrap';
import CartItem from './CartItem';
const Cart = props => {
    const ctx = useContext(Econtext);
    const totalAmount = `$${ctx.totalAmount}`
    const addProdHandler = product => {
        ctx.OnAddProd(product)
    }
    const removeProdHandler = id => {
        ctx.onRemoveProd(id)
    }
    return (
        <>
            <div
                className="modal show"
                style={{ display: 'block', position: 'fixed' }}
            >
                <Modal.Dialog style={{ float: 'right', top: '50px' }}>
                    <Modal.Header >
                        <Modal.Title>CART</Modal.Title>
                        <CloseButton onClick={props.onClose} />
                    </Modal.Header>

                    <Modal.Body>
                        <Table >
                            <thead>
                                <tr>
                                    <th>ITEM</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ctx.product.map(item => (
                                    <tr key={item.id}>
                                        <CartItem title={item.title} price={item.price} id={item.id} amount={item.amount} imageUrl={item.imageUrl}
                                            onAdd={addProdHandler.bind(null, item)} onRemove={removeProdHandler.bind(null, item.id)} />
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>

                    <Modal.Footer>
                        <div className='container' style={{ textAlign: 'right', fontWeight: 'bold' }}>
                            <span>Total  </span>
                            <span>{totalAmount}</span>
                        </div>
                        <Button variant="secondary">Purchase</Button>

                    </Modal.Footer>
                </Modal.Dialog>

            </div>

        </>
    )
}
export default Cart;