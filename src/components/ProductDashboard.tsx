import React from 'react';
import { ProductOverview } from './ProductOverview';
import { Widget } from './Widget';
import { Product } from '../types';

type ProductDashboardProps = {
  product: Product | null;
};

export const ProductDashboard: React.FC<ProductDashboardProps> = ({
  product,
}) => {

  return (
    <div id='product-dashboard'>
      <div className="product-overview--wrapper card"><ProductOverview product={ product }/></div>
      <section className="product-dashboard--widgets">
        <Widget />
        <Widget />
      </section>
    </div>
  )
};