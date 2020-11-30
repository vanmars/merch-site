import React, { Component } from 'react';
import { v4 } from 'uuid'; 
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import UpdateProductForm from './UpdateProductForm';
import ProductDetail from './ProductDetail';
import BuyProductForm from './BuyProductForm';
import RestockProductForm from './RestockProductForm';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';

class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
    const { dispatch } = this.props;
    const { name, description, quantity, id } = newProduct;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  // handleAddingNewProduct = (newProduct) => {
  //   const newMasterProductList = this.state.masterProductList.concat(newProduct);
  //   console.log(newMasterProductList)
  //   this.setState({
  //     masterProductList: newMasterProductList, 
  //     formVisibleOnPage: false
  //   });
  // }

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
    const { dispatch } = this.props;
    const { name, description, quantity, id }  = productToUpdate;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false, 
      selectedProduct: null
    });
  }

  // handleUpdatingProduct = (productToUpdate) => {
  //   const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToUpdate);
  //   this.setState({
  //     masterProductList: updatedMasterProductList, 
  //     editing: false, 
  //     selectedProduct: null
  //   });
  // }

  // Buy Item
  handleBuyClick = () => {
    this.setState({buying: true});
  }

  handleBuyingProduct = (productToBuy) => {
    const { dispatch } = this.props;
    const { name, description, quantity, id }  = productToBuy;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({
      buying: false,
      selectedProduct: null
    })
  }

  // handleBuyingProduct = (productToBuy) => {
  //   const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToBuy);
  //   this.setState({
  //     masterProductList: updatedMasterProductList,
  //     buying: false,
  //     selectedProduct: null
  //   })
  // }

  // Restock Item
  handleRestockClick = () => {
    this.setState({restocking: true});
  }

  handleRestockingProduct = (productToRestock) => {
    const { dispatch } = this.props;
    const { name, description, quantity, id }  = productToRestock;
    const action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    }
    dispatch(action);
    this.setState({
      restocking: false,
      selectedProduct: null
    })
  }

  // handleRestockingProduct = (productToRestock) => {
  //   const updatedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToRestock);
  //   this.setState({
  //     masterProductList: updatedMasterProductList,
  //     restocking: false,
  //     selectedProduct: null
  //   })
  // }

  // Delete Individual Product
  handleDeletingProduct = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_PRODUCT',
      id: id
    }
    dispatch(action);
    this.setState({selectedProduct: null});
  }

  // handleDeletingProduct = (id) => {
  //   const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
  //   this.setState({
  //     masterProductList: newMasterProductList, 
  //     selectedProduct: null
  //   });
  // }
  
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
        <hr />
        <button class="btn btn-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

ProductControl.propTypes = {
  masterProductList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterProductList: state
  };
}

ProductControl = connect(mapStateToProps)(ProductControl);
export default ProductControl;