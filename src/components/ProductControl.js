import React, { Component } from 'react';
import { v4 } from 'uuid'; 
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import UpdateProductForm from './UpdateProductForm';
import ProductDetail from './ProductDetail';

class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [
        {name: "Item 1", description: "A description of item 1", quantity: "1", id: v4()},
        {name: "Item 2", description: "A description of item 2", quantity: "2", id: v4()},
        {name: "Item 3", description: "A description of item 3", quantity: "3", id: v4()},
        {name: "Item 4", description: "A description of item 4", quantity: "4", id: v4()},
      ],
      selectedProduct: null,
      editing: false
    };
  }

  // Handle Visible Button Click Events
  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  // Create New Product
  handleAddingNewProduct = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    console.log(newMasterProductList)
    this.setState({masterProductList: newMasterProductList, formVisibleOnPage: false});
  }

  // Read Individual Product
  handleSelectingProduct= (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }
  
  // Update Individual Product
  handleUpdatingProduct = (productToUpdate) => {

  }

  // Delete Individual Product
  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({masterProductList: newMasterProductList, selectedProduct: null})
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    // Individual Product
    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail 
        product = {this.state.selectedProduct}
        onClickingDelete = {this.handleDeletingProduct}
      />
      buttonText = "Return to Ticket List"

    // New Form
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm onNewProductCreation={this.handleAddingNewProduct}/>
      buttonText = "Return to Product List"
    
    // Product List
    } else  {
      currentlyVisibleState = <ProductList 
        products = {this.state.masterProductList}
        onProductSelection = {this.handleSelectingProduct}
        />
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