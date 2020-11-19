import React, { Component } from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';

class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null,
      editing: false
    };
  }

  // Handle Visible Button Click Events
  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  // Create New Product
  handleAddingNewProduct = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    console.log(newMasterProductList)
    this.setState({masterProductList: newMasterProductList, formVisibleOnPage: false});

  }
  // Read Individual Product
  
  // Update Individual Product

  // Delete Individual Product

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    // Conditional Rendering
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct}/>
      buttonText = "Return to Product List"

    } else {
      currentlyVisibleState = <ProductList products = {this.state.masterProductList}/>
      buttonText = "Add New Product"
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default ProductControl;