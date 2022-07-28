
import React from 'react';
 
type StatusType = {
    status?: {
        [id: number]: boolean;
    } | null
    active: ( i: number)  => void
}
// Creating the context object and passing the default values.
const initialValue: StatusType = { status: null, active:(i: number)=>{}}
const ProductContext = React.createContext(initialValue);
 
export default ProductContext;