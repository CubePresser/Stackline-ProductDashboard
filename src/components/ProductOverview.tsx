import React, { useState } from 'react';
import { Product } from '../types';

type ProductOverviewProps = {
  product: Product | null;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({
  product
}) => {
  const [ loadingImg, setLoadingImg ] = useState(true);

  return (
    <article className="product-overview">
      {product ? (
        <>
        <img
          src={product.image}
          onLoad={() => setLoadingImg(true)}
          style={ loadingImg ? {} : { display: 'none' } }
        />
        <h1>{ product.title }</h1>
        <p>{ product.subtitle }</p>
        <ul className="tags-list">
          {
            product.tags.map(tag => (
              <li className="tag">{tag}</li>
            ))
          }
        </ul>
        </>
      ): null}
    </article>
  );
}