import React from "react";

const Econtext = React.createContext({
    product: [],
    totalAmount: 0,
    OnAddProd: items => { },
    onRemoveProd: (id) => { }
})
export default Econtext;