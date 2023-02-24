import React, { useReducer, useState } from "react";
import Econtext from "./ecom-context";

const AddReducer = (state, action) => {
    if (action.type === 'ADD') {
        let updatedAmount;
        const existItemIndex = state.product.findIndex(
            (item) => {
                return item.id === action.product.id
            }
        );
        const existingItem = state.product[existItemIndex];
        let updatedProducts;
        if (existingItem) {
            const updatedProduct = { ...existingItem, amount: existingItem.amount + 1 }
            updatedProducts = [...state.product]
            updatedProducts[existItemIndex] = updatedProduct;
            updatedAmount = state.totalAmount + action.product.price

        } else {
            updatedProducts = state.product.concat(action.product)
            updatedAmount = state.totalAmount + action.product.price * action.product.amount;
        }
        return { product: updatedProducts, totalAmount: updatedAmount, SingleProduct: {} }

    }
    if (action.type === 'REMOVE') {
        const existItemIndex = state.product.findIndex(
            (item) => {
                return item.id === action.id
            }
        );
        const existingItem = state.product[existItemIndex];

        let updatedProducts;
        if (existingItem.amount === 1) {
            updatedProducts = state.product.filter(item => item.id !== action.id);
        } else {
            const updatedProduct = { ...existingItem, amount: existingItem.amount - 1 };
            updatedProducts = [...state.product];
            updatedProducts[existItemIndex] = updatedProduct;
        }


        const updatedAmount = state.totalAmount - existingItem.price;
        return { product: updatedProducts, totalAmount: updatedAmount, SingleProduct: {} }
    }
    if (action.type === 'SHOW') {
        return { product: [...state.product], totalAmount: state.totalAmount, SingleProduct: action.product }
    }

    return { product: [], totalAmount: 0, SingleProduct: [] };
}

const EcontextProvider = (props) => {
    const [ecomState, dispatchState] = useReducer(AddReducer, { product: [], totalAmount: 0 })
    const OnAddHandler = (product) => {
        dispatchState({ type: 'ADD', product: product })
    }
    const OnRemoveHandler = (id) => {
        dispatchState({ type: 'REMOVE', id: id })
    }
    const onShowDetailshandler = (product) => {
        dispatchState({ type: 'SHOW', product: product })
    }

    const item = localStorage.getItem('token');
    let intialToken = JSON.parse(item);
    const now = new Date();
    if (intialToken !== null && now.getTime() > intialToken.expiry) {
        localStorage.removeItem('token')
        intialToken = null;
    }
    const [token, setToken] = useState(intialToken);
    const userLoggedIn = !!token;
    const loginHandler = (token) => {
        const item = {
            value: token,
            expiry: new Date().getTime() + 1 * 60000
        }
        setToken(token)
        localStorage.setItem('token', JSON.stringify(item))
    }
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
    }


    const eContext = {
        product: ecomState.product,
        SingleProduct: ecomState.SingleProduct,
        totalAmount: ecomState.totalAmount,
        OnAddProd: OnAddHandler,
        onRemoveProd: OnRemoveHandler,
        onShowDetails: onShowDetailshandler,
        token: token,
        isLogedin: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }
    return (
        < Econtext.Provider value={eContext}>{props.children}</Econtext.Provider>
    )

}
export default EcontextProvider;
