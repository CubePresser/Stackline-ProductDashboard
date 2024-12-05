import React, { useMemo } from 'react';
import { ProductOverview } from './ProductOverview';
import { Widget } from './Widget';
import { Table, TableHeader, TableCell } from './visualizations';
import { Product } from '../types';

type ProductDashboardProps = {
  product: Product | null;
};

const tableHeaders: TableHeader[] = [
  { id: 'weekEnding', title: 'WEEK ENDING', type: 'date' },
  { id: 'retailSales', title: 'RETAIL SALES', type: 'currency' },
  { id: 'wholesaleSales', title: 'WHOLESALE SALES', type: 'currency' },
  { id: 'unitsSold', title: 'UNITS SOLD', type: 'number' },
  { id: 'retailerMargin', title: 'RETAILER MARGIN', type: 'currency' },
];

export const ProductDashboard: React.FC<ProductDashboardProps> = ({
  product,
}) => {
  const tableRows = useMemo((): TableCell[][] => {
    if (product === null) {
      return [];
    }

    return product.sales.map(sale => ([sale.weekEnding, sale.retailSales, sale.wholesaleSales, sale.unitsSold, sale.retailerMargin]));
  }, [product])

  return (
    <div id='product-dashboard'>
      <div className="product-overview--wrapper card"><ProductOverview product={ product }/></div>
      <section className="product-dashboard--widgets">
        <Widget>{ product ? <Table data={{
          headers: tableHeaders,
          rows: tableRows
        }} /> : null}</Widget>
      </section>
    </div>
  )
};