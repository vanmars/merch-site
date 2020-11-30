import productListReducer from '../../../reducers/product-list-reducer';

describe('productListReducer', () => {
  let action;
  const productData = {
    name: "Shoes",
    description: "Really snazzy shoes.",
    quantity: 2,
    id: 1
  } ;
  const currentState = {
    1: {
      name: "Hat",
      description: "Really snazzy hat.",
      quantity: 1,
      id: 1
    },
    2: {
      name: "Mittens",
      description: "Really snazzy mittens.",
      quantity: 3,
      id: 2
    }
  };

  test('should successfully delete product from masterProductList', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {
        name: "Mittens",
        description: "Really snazzy mittens.",
        quantity: 3,
        id: 2
      }
    });
  });

test('should successfully add new product data to masterProductList', () => {
    const {name, description, quantity, id} = productData;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    }
    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        description: description,
        quantity: quantity,
        id: id
      }
    })
  });

test('should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, {type: null})).toEqual({});
  });
})