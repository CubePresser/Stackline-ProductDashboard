import { useEffect } from 'react';
import { useAppDispatch, useCurrentProduct } from "./redux/hooks";
import { hydrate, setCurrentProduct } from './redux/productSlice';
import { ProductDashboard, SiteHeader } from "./components";
import mockData from './static/mock-data.json';

function App() {
  /**
   * There's hardly any reason to use redux in an app this small
   * so I'm treating this as just one small part of a much bigger app.
   * 
   * Assuming there will be some global list of products that many
   * parts of the app use, for this example we'll just make sure
   * the products list is populated, choose a currentProduct (index 0)
   * and pass that product into the ProductDashboard which I've written under
   * the assumption that the product dashboard page will only have one product
   * at a time to display.
   */
  const product = useCurrentProduct();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!dispatch) {
      return;
    }

    // Normally I'd write api calls into a file 'api.ts' and export a list of functions
    // For this assessment, I think using a setTimeout here should be fine
    const timeout = setTimeout(() => {
      dispatch(hydrate(mockData));
      dispatch(setCurrentProduct(mockData[0].id));
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, [dispatch]);

  return (
    <div id="app">
      <SiteHeader />
      <ProductDashboard product={product}/>
    </div>
  )
}

export default App
