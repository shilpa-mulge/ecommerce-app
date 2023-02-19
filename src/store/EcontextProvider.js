import React, { useReducer } from "react";
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
    const eContext = {
        product: ecomState.product,
        SingleProduct: ecomState.SingleProduct,
        totalAmount: ecomState.totalAmount,
        OnAddProd: OnAddHandler,
        onRemoveProd: OnRemoveHandler,
        onShowDetails: onShowDetailshandler
    }
    return (
        < Econtext.Provider value={eContext}>{props.children}</Econtext.Provider>
    )

}
export default EcontextProvider;
