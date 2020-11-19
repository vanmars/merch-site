import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function UpdateProductForm(props) {
  const { product } = props

  function handleUpdateProductFormSubmission(event){
    event.preventDefault();
    props.onProductUpdate({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: product.id});
  }

  return(
    <React.Fragment>
      <h1>Update Product Form</h1>
      <ReusableForm 
        buttonText="Update Product"
        formSubmissionHandler={handleUpdateProductFormSubmission}
      />
    </React.Fragment>
  )
}

UpdateProductForm.propTypes = {
 product: PropTypes.object,
 onProductUpdate: PropTypes.func
}

export default UpdateProductForm;