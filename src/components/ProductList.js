import React from 'react';
import PropTypes from 'prop-types';
import Product from  './Product';

function ProductList(props) {
  return(
    <React.Fragment>
      <h1 class="display-4">Product List</h1>
      <hr />
      <div class="card-deck">
        {props.products.map(product => 
          <div class="card shadow-lg p-4">
            <Product 
              name={product.name}
              description={product.description}
              quantity={product.quantity} 
              id={product.id}
              key={product.id}
              whenProductClicked = {props.onProductSelection}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  onProductSelection: PropTypes.func
}

export default ProductList;