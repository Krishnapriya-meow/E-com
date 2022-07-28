import React, { useState } from 'react';
import './App.css';
import ProductContext from './products/ProductContext';
import { ProductList } from './products/ProductList';
 
type User = {
  [id: number]: boolean;
}
function App() {

  const [status, setStatus] = useState<User>({});
  const handleActive= (i: number) => {
    const state: User = JSON.parse(JSON.stringify(status))
    state[i] = !state[i];
    setStatus(state);
  };
  return (
    <div className="App">
      <header className="App-header">
      <ProductContext.Provider value={{ status, active: handleActive}}>
      <ProductList/>
      </ProductContext.Provider>
      </header>
    </div>
  );
}

export default App;
