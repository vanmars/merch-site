import React from 'react';
import { v4 } from 'uuid'; 
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewProductForm(props) {

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }

  return(
    <React.Fragment>
      <h1>New Product Form</h1>
      <ReusableForm 
        buttonText="Create New Product"
        formSubmissionHandler={handleNewProductFormSubmission} />
    </React.Fragment>
  )
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
}

export default NewProductForm;