import React, { useState, useEffect, useCallback } from "react";
import Econtext from "./ecom-context";

const EcontextProvider = (props) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [SingleProduct, setSingleProduct] = useState([])
    const item = localStorage.getItem('token');
    let intialToken = JSON.parse(item);
    const now = new Date();
    if (intialToken !== null && now.getTime() > intialToken.expiry) {
        localStorage.removeItem('token')
        intialToken.idToken = null;
        intialToken.emailId = null

    }

    const [token, setToken] = useState(intialToken ? intialToken.idToken : '');
    const [email, setEmail] = useState(intialToken ? intialToken.emailId : '')
    const [cart, setCart] = useState([]);
    const userLoggedIn = !!token;

    const OnRemoveHandler = (id) => {
        const updatedCart = cart.filter(product => product._id !== id);
        const productindex = cart.findIndex(item => item._id === id)
        const product = cart[productindex]
        setCart(updatedCart);
        setTotalAmount(preAmount => preAmount - product.price)
    }


    const onShowDetailshandler = (product) => {
        setSingleProduct(product)
    }

    const loginHandler = (token, email) => {
        const item = {
            emailId: email,
            idToken: token,
            expiry: new Date().getTime() + 5 * 60000
        }
        setEmail(email)
        setToken(token)
        localStorage.setItem('token', JSON.stringify(item))
    }

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    const onShowCart = useCallback(() => {
        const updatedAmount = cart.reduce((currentValue, product) => {
            return currentValue += product.price;
        }, 0)
        setTotalAmount(updatedAmount)

        fetch(`https://crudcrud.com/api/387e01a5c90a47bab00656cb7079acde/${email}`)
            .then(async response => {
                if (response.ok) {
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
                setCart(data)
                const updatedAmount = data.reduce((currentValue, product) => {
                    return currentValue += product.price;
                }, 0)
                setTotalAmount(updatedAmount)
            }).catch(err => {
                alert(err)
            })
    }, [email])
    useEffect(() => {
        onShowCart()
    }, [onShowCart]);

    const eContext = {
        SingleProduct: SingleProduct,
        totalAmount: totalAmount,
        onRemoveProd: OnRemoveHandler,
        onShowDetails: onShowDetailshandler,
        email: email,
        token: token,
        isLogedin: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        cart: cart,
        onShowCart: onShowCart
    }
    return (
        < Econtext.Provider value={eContext}>{props.children}</Econtext.Provider>
    )

}
export default EcontextProvider;
