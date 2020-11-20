import React from 'react';
import PropTypes from 'prop-types';


function RestockProductForm (props) {
  const {product, onProductRestock } = props;
  let quantity = product.quantity;
  if (quantity === "Out of Stock") {
    quantity = 0;
  } else {
    quantity = parseInt(quantity);
  }

  function handleRestockProductFormSubmission (event) {
    event.preventDefault();
    let newQuantity = (quantity + parseInt(event.target.restockQuantity.value)).toString();
    if (newQuantity === "0") {
      newQuantity = "Out of Stock"
    };
    onProductRestock({name: product.name, description: product.description, quantity: newQuantity, id: product.id});
  }

  return (
    <React.Fragment>
      <h1>Restock {product.name} Form</h1>
      <h2>{product.description} </h2>
      <form onSubmit={handleRestockProductFormSubmission}>
        {/* <label for="restockQuantity">Number of Items to Restock</label> */}
        <input type="text" id= "restockQuantity" name="restockQuantity" placeholder="Number" />
        <button type="submit">Restock</button>
      </form>
    </React.Fragment>
  )
}

RestockProductForm.propTypes = {
  product: PropTypes.object,
  onProductRestock: PropTypes.func
}

export default RestockProductForm;