import React from 'react';
import PropTypes from 'prop-types';

function BuyProductForm (props) {
  const {product, onProductBuy } = props
  let quantity = product.quantity;
  if (quantity === "Out of Stock") {
    quantity = 0;
  } else {
    quantity = parseInt(quantity);
  }
  let quantityArray = [...Array(quantity + 1).keys()]
  quantityArray.shift();

  function handleBuyProductFormSubmission (event) {
    event.preventDefault();
    let newQuantity = (quantity - parseInt(event.target.buyQuantity.value)).toString();;
    if (newQuantity == "0") {
      newQuantity = "Out of Stock"
    };
    onProductBuy({name: product.name, description: product.description, quantity: newQuantity, id: product.id});
  }

  return (
    
    <React.Fragment>
      <h1>Buy {product.name} Form</h1>
      <h2>{product.description} </h2>
      <hr />
      <form onSubmit={handleBuyProductFormSubmission}>
        <select name="buyQuantity">
          {quantityArray.map( el => 
            <option>{el}</option> )}
        </select>
        <button type="submit">Buy</button>
      </form>;
    </React.Fragment>
  )
}

BuyProductForm.propTypes = {
  product: PropTypes.object,
  onProductBuy: PropTypes.func
}

export default BuyProductForm;