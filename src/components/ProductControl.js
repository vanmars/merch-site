import React, { Component } from 'react';
import { v4 } from 'uuid'; 
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import UpdateProductForm from './UpdateProductForm';
import ProductDetail from './ProductDetail';
import BuyProductForm from './BuyProductForm';
import RestockProductForm from './RestockProductForm';

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
      editing: false,
      buying: false,
      restocking: false,
    };
  }

  // Handle Visible Button Click Events
  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false,
        buying: false,
        restocking: false
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
    this.setState({
      masterProductList: newMasterProductList, 
      formVisibleOnPage: false
    });
  }

  // Read Individual Product
  handleSelectingProduct= (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
    this.setState({selectedProduct: selectedProduct});
  }
  
  // Update Individual Product
  handleUpdateClick = () => {
    this.setState({editing: true});
  }

  handleUpdatingProduct = (productToUpdate) => {
    const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToUpdate);
    this.setState({
      masterProductList: updatedMasterProductList, 
      editing: false, 
      selectedProduct: null
    });
  }

  // Buy Item
  handleBuyClick = () => {
    this.setState({buying: true});
  }

  handleBuyingProduct = (productToBuy) => {
    const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToBuy);
    this.setState({
      masterProductList: updatedMasterProductList,
      buying: false,
      selectedProduct: null
    })
  }

  // Restock Item
  handleRestockClick = () => {
    this.setState({restocking: true});
  }

  handleRestockingProduct = () => {
    
  }


  // Delete Individual Product
  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      masterProductList: newMasterProductList, 
      selectedProduct: null
    });
  }
  
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    // Update Form
    if (this.state.editing) {
      console.log("render conditional reached");
      currentlyVisibleState = <UpdateProductForm
        product = {this.state.selectedProduct}
        onProductUpdate={this.handleUpdatingProduct}
      />
      buttonText = "Return to Product List"

    // Buying
    } else if (this.state.buying) {
      currentlyVisibleState = <BuyProductForm
        product = {this.state.selectedProduct}
        onProductBuy = {this.handleBuyingProduct}
      />
      buttonText = "Return to Ticket List"

    // Restocking
    } else if (this.state.restocking) {
      currentlyVisibleState = <RestockProductForm
        product = {this.state.selectedProduct}
        onProductRestock = {this.handleRestockingProduct}
      />
      buttonText = "Return to Ticket List"

    // View Individual Product
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail 
        product = {this.state.selectedProduct}
        onClickingDelete = {this.handleDeletingProduct}
        onClickingUpdate = {this.handleUpdateClick}
        onClickingBuy = {this.handleBuyClick }
        onClickingRestock = {this.handleRestockClick }
      />
      buttonText = "Return to Ticket List"

    // New Form
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewProductForm 
        onNewProductCreation={this.handleAddingNewProduct}
      />
      buttonText = "Return to Product List"
   
    // Product List
    } else {
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