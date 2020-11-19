import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props) {
  const { product, onClickingDelete, onClickingUpdate, onClickingBuy, onClickingRestock } = props;
  return(
    <React.Fragment>
      <h1>Product Detail</h1>
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <h4>{product.quantity}</h4>
      <hr />
      <button onClick={() => onClickingBuy(product.id)}>Buy</button>
      <button onClick={() => onClickingRestock(product.id)}>Restock</button>
      <button onClick={() => onClickingUpdate(product.id)}>Update</button>
      <button onClick={() => onClickingDelete(product.id)}>Delete</button>
    </React.Fragment>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingUpdate: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func,
}

export default ProductDetail;