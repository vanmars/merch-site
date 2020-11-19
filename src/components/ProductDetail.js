import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props) {
  const { product, onClickingUpdate, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <h4>{product.quantity}</h4>
      <hr />
      <button>Buy</button>
      <button>Restock</button>
      <button onClick={()=> onClickingUpdate(product.id)}>Update</button>
      <button onClick={() => onClickingDelete(product.id)}>Delete</button>
    </React.Fragment>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpdate: PropTypes.func
}

export default ProductDetail;