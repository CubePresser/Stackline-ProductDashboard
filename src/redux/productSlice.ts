// Reference: https://redux.js.org/tutorials/typescript-quick-start
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dictionary, Product } from '../types';

type ProductState = {
  products: Dictionary<Product>;
  currentProduct: string | null;
};

const initialState: ProductState = {
  products: {},
  currentProduct: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    hydrate: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload.reduce((dict, product) => {
        dict[product.id] = product;
        return dict;
      }, {} as Dictionary<Product>)
    },
    setCurrentProduct: (state, action: PayloadAction<string>) => {
      state.currentProduct = action.payload;
    }
  }
});

export const { hydrate, setCurrentProduct } = productSlice.actions;
export default productSlice.reducer;