// Reference: https://redux.js.org/tutorials/typescript-quick-start
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useCurrentProduct = () => {
  return useAppSelector(({
    product: {
      products,
      currentProduct
    }
  }) => {
    if (currentProduct !== null && products[currentProduct] !== undefined) {
      return products[currentProduct];
    } else {
      return null;
    }
  });
}