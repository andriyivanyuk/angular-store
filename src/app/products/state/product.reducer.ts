import { Product } from '../product';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
  products: ProductState;
}

// Product interface
export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

// Default state
const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: [],
};

// Feature selector created
const getProductFeatureState = createFeatureSelector<ProductState>('products');

// Get required property using selector
export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode
);
// Get current product
export const getCurrentProduct = createSelector(
  getProductFeatureState,
  (state) => state.currentProduct
);
// Get products
export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

// Reducer function
export function reducer(
  state: ProductState = initialState,
  action
): ProductState {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload,
      };
    default:
      return state;
  }
}
