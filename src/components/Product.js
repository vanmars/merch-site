import React from 'react';
import PropTypes from 'prop-types';
import { getSuggestedQuery } from '@testing-library/react';

function Product(props) {
  const spanStyle = {
    color: 	"#A9A9A9",
    fontSize: 16,
  }

  return(
    <React.Fragment>
      <div class="text-left" onClick = {() => props.whenProductClicked(props.id)}>
        <h1 style={{fontSize: 18}}>{props.name}</h1>
        <h2 style={{fontSize: 12}}><span style={spanStyle}>Description:</span> {props.description}</h2>
        <h3 style={{fontSize: 12}}><span style={spanStyle}>Quantity:</span> {props.quantity}</h3>
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