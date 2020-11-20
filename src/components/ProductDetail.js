import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props) {
  const { product, onClickingDelete, onClickingUpdate, onClickingBuy, onClickingRestock } = props;
  let buyButton;
  if (product.quantity !== "Out of Stock"){
    buyButton = <button class="btn bg-success mr-3" onClick={() => onClickingBuy(product.id)}>Buy</button>
  }

  const spanStyle = {
    color: 	"#A9A9A9",
    fontSize: 18,
  }
 
  return(
    <React.Fragment>
      <h1 style={{fontSize: 20}}>Product Detail</h1>
      <h2 style={{fontSize: 14}}>{product.name}</h2>
      <h3 style={{fontSize: 14}}><span style={spanStyle}>Description:</span> {product.description}</h3>
      <h4 style={{fontSize: 12}}><span style={spanStyle}>Quantity:</span> {product.quantity}</h4>
      <hr />
      {buyButton}
      <button class="btn bg-info mr-3" onClick={() => onClickingRestock(product.id)}>Restock</button>
      <button class="btn bg-warning mr-3" onClick={() => onClickingUpdate(product.id)}>Update</button>
      <button class="btn bg-danger mr-3" onClick={() => onClickingDelete(product.id)}>Delete</button>
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