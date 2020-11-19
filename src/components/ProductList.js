import React from 'react';
import PropTypes from 'prop-types';
import Product from  './Product';

function ProductList(props) {
  return(
    <React.Fragment>
      <h1>Product List</h1>
      {props.products.map(product => 
        <Product 
          name={product.name}
          description={product.description}
          quantity={product.quantity} 
          id={product.id}
          key={product.id}
          whenProductClicked = {props.onProductSelection}
        />
      )}
    </React.Fragment>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  onProductSelection: PropTypes.func
}

export default ProductList;