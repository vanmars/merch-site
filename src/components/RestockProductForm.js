import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function RestockProductForm (props) {
  const {product, onProductRestock } = props

  function handleRestockProductFormSubmission (event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <h1>Restock {product.name} Form</h1>
      <h2>{product.description} </h2>

      <form onSubmit={{handleRestockProductFormSubmission}}>
        <select>
          {product.id}
              <option name="restock-quantity" id="restock-quantity"></option>
        </select>
       

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