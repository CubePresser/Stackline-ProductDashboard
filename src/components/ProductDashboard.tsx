import React from 'react';
import { ProductOverview } from './ProductOverview';
import { Widget } from './Widget';

export const ProductDashboard: React.FC = () => {
  return (
    <div id='product-dashboard'>
      <div className="product-overview--wrapper card"><ProductOverview /></div>
      <section className="product-dashboard--widgets">
        <Widget />
        <Widget />
      </section>
    </div>
  )
};