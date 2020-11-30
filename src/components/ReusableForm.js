import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        {/* <label for="name">Name</label> */}
        <input type="text" name="name" id="name" placeholder="Product Name" />

        {/* <label for="">Description</label> */}
        <textarea name="description" id="description" placeholder="Product Description" />

        {/* <label for="quantity">Quantity</label> */}
        <input type="text" name="quantity" id="quantity" placeholder="Quantity" />

        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func

}

export default ReusableForm;