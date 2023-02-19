import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Econtext from "../store/ecom-context";
import { Button, Table, Container, Image, Dropdown } from "react-bootstrap";
import Cart from "../Cart/Cart";

const ProductDetailsPage = () => {
    const [isAdded, setIsAdded] = useState(false)
    const [CartIsShown, setCartIsShown] = useState(false)
    const param = useParams();
    const ctx = useContext(Econtext)
    const product = { ...ctx.SingleProduct };


    const AddtoCartHandler = (event) => {
        event.preventDefault()
        setIsAdded(true)
        ctx.OnAddProd(product)
    }
    const onShowHandler = () => {
        setCartIsShown(true)
    }
    const onCloseHandler = () => {
        setCartIsShown(false)
    }
    return (
        <>
            <Container className="border shadow m-auto mt-5" >
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                <Image src={product.imageUrl}></Image>
                            </td>
                            <td>
                                <h1>{product.title}</h1>
                                <h3>${product.price}</h3>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">Product Details
                                    </Dropdown.Toggle>
                                </Dropdown>
                                <h5>Rating & Reviews <Button variant="outline-info">Rate Product</Button></h5>
                                <div className="mb-2" style={{ display: 'flex', alignItems: 'flex-end', height: '200px', padding: '2rem' }}>
                                    {CartIsShown && <Cart onClose={onCloseHandler} />}
                                    {isAdded && <Button size="lg" variant="secondary" onClick={onShowHandler}>go to cart</Button>}
                                    {!isAdded && <Button size="lg" variant="secondary" onClick={AddtoCartHandler}>Add to cart</Button>}
                                    <Button size="lg" vareant='info'>Buy  now</Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </Table>
            </Container >

        </>
    )
}
export default ProductDetailsPage;