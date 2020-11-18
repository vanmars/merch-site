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
          quantity={product.quantity} />
      )}
    </React.Fragment>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object)
}

export default ProductList;