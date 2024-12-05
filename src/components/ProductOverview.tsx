import React from 'react';
import { Product } from '../types';

type ProductOverviewProps = {
  product: Product | null;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({
  product
}) => {
  return (
    <article className="product-overview">
      {product ? (
        <>
        <h1>{ product.title }</h1>
        <p>{ product.subtitle }</p>
        </>
      ): null}
    </article>
  );
}