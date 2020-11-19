import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return(
    <React.Fragment>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h3>{props.quantity}</h3>
      <hr/>
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string
}

export default Product;