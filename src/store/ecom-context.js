import React from "react";

const Econtext = React.createContext({
    product: [],
    SingleProduct: [],
    totalAmount: 0,
    OnAddProd: items => { },
    onRemoveProd: (id) => { },
    onShowDetails: item => { }
})
export default Econtext;