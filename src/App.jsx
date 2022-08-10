import React from 'react';
import AddProduct from './component/AddProduct';
import ShowProduct from './component/ShowProduct';
import './app.css'

function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <AddProduct />
        </div>
        <div className="column">
          <ShowProduct />
        </div>
      </div>      
    </div>
  );
}

export default App;
