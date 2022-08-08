import { useWhyDidYouUpdate } from 'ahooks';
import React from 'react';
import { ProductsListProps } from '../../types/types';
import { ProductItem } from '../ProductItem';

import styles from './ProductList.module.scss';

export const ProductList: React.FC<ProductsListProps> = React.memo(
  ({ products, deleteProduct }) => {
    useWhyDidYouUpdate('ProductList', { products, deleteProduct });
    return (
      <div className={styles.list}>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            name={item.name}
            description={item.description}
            imgLink={item.imgLink}
            price={item.price}
            func={() => deleteProduct(item.id)}
          />
        ))}
      </div>
    );
  },
);
