import React from "react";

const Econtext = React.createContext({
    product: [],
    SingleProduct: [],
    totalAmount: 0,
    OnAddProd: items => { },
    onRemoveProd: (id) => { },
    onShowDetails: item => { },
    token: "",
    isLogedin: false,
    login: (token) => { },
    logout: () => { }
})
export default Econtext;