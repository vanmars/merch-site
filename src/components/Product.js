import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return(
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h3>{props.quantity}</h3>
        <hr/>
      </div>
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
}

export default Product;