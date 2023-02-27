import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Container, Image, Dropdown, Alert } from "react-bootstrap";
import Econtext from "../store/ecom-context";

const ProductDetailsPage = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isAdded, setIsAdded] = useState(false)
    const ctx = useContext(Econtext)
    const Navigate = useNavigate();
    const product = { ...ctx.SingleProduct };
    const AddtoCartHandler = (event) => {
        event.preventDefault()
        setIsAdded(true)
        fetch(`https://crudcrud.com/api/387e01a5c90a47bab00656cb7079acde/${ctx.email}`, {
            method: 'POST',
            body: JSON.stringify(product),
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
            setShowSuccessMessage(true);
        }).catch(err => {
            alert(err)
        })
    }
    const onShowHandler = () => {
        Navigate(`/Login/Cart/${ctx.token}`)
        ctx.onShowCart()
    }

    return (
        <>
            <Container className="border shadow m-auto mt-5" >

                <Table>
                    {showSuccessMessage && (
                        <Alert variant="success">
                            Added to cart!
                        </Alert>
                    )}
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