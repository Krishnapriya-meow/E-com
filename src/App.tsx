import React, { useState } from 'react';
import './App.css';
import ProductContext from './products/ProductContext';
import { ProductList } from './products/ProductList';
 
interface user {
  id:number,
  status:boolean
}
function App() {
  let user :user={
    id:0,
    status:false
  } 

  const [status, setStatus] = useState(false);
  const handleActive= () => {
    setStatus(true);
  };
  return (
    <div className="App">
      <header className="App-header">
      <ProductContext.Provider value={{ status:status, active: handleActive}}>
      <ProductList/>
      </ProductContext.Provider>
      
      </header>
    </div>
  );
}

export default App;
