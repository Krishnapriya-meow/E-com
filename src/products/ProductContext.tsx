
import React from 'react';
 
// Creating the context object and passing the default values.
const ProductContext = React.createContext({status:false,active:()=>{}});
 
export default ProductContext;