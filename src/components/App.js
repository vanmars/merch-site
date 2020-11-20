import React from 'react';
import Header from './Header';
import ProductControl from './ProductControl';

function App() {
  return (
    <div class="container mb-5">
      <div class="jumbotron text-center bg-info">
        <Header />
      </div>
      <div class="text-center">
        <ProductControl />
      </div>
    </div>
  );
}

export default App;