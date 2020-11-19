import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props) {
  const { product } = props;
  return(
    <React.Fragment>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <h4>{product.quantity}</h4>
    </React.Fragment>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object
}

export default ProductDetail;