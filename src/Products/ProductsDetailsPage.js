import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table, Container, Image, Dropdown, Alert } from "react-bootstrap";
import Econtext from "../store/ecom-context";
import axios from "axios";

const ProductDetailsPage = () => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isAdded, setIsAdded] = useState(false)
    const ctx = useContext(Econtext)
    const Navigate = useNavigate();
    const product = { ...ctx.SingleProduct };

    const AddtoCartHandler = async () => {
        const sameItemIndex = ctx.cart.findIndex(item => item.title === product.title)
        const sameItem = ctx.cart[sameItemIndex]
        if (sameItem) {
            const productObj = {
                title: product.title,
                price: (product.price + sameItem.price),
                imageUrl: product.imageUrl,
                amount: (sameItem.amount + 1)
            }
            try {
                const response = await axios.put(`https://crudcrud.com/api/a54fc3bea4b94de0994c9baee4422afb/${ctx.email}/${sameItem._id}`, productObj)
                ctx.onShowCart()
                setIsAdded(true)
                console.log(response.data)
            } catch (err) {
                alert(err.message)
                setIsAdded(false)
            }
        } else {
            const productObj = {
                title: product.title,
                price: product.price,
                imageUrl: product.imageUrl,
                amount: 1
            }
            try {
                const response = await axios.post(`https://crudcrud.com/api/90a84a456e634723b1b59280182ae24e/${ctx.email}`, productObj)
                if (response.data) {
                    ctx.onShowCart()
                    setShowSuccessMessage(true);
                    setIsAdded(true)
                }
            } catch (err) {
                alert(err.message)
                setIsAdded(false)
            }
        }

    }
    const onShowHandler = () => {
        Navigate(`/Login/Cart/${ctx.token}`)
        ctx.onShowCart()
    }

    return (
        <>
            <Container className="border shadow m-auto mt-5" >
                {showSuccessMessage && (
                    <Alert variant="success">
                        Added to cart!
                    </Alert>
                )}
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