import React from 'react';
import styles from './ProductItem.module.scss';
import imgDelete from '../../assets/img/delete-btn.svg';
import { ProductsItemProps } from '../../types/types';
import { useWhyDidYouUpdate } from 'ahooks';

export const ProductItem: React.FC<ProductsItemProps> = React.memo(
  ({ name, description, imgLink, price, func }) => {
    useWhyDidYouUpdate('ProductItem', { name, description, imgLink, price, func });
    return (
      <div className={styles.listItem}>
        <img className={styles.img} src={imgLink} alt="" />
        <div className={styles.content}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
          <span className={styles.price}>{price} руб.</span>
        </div>
        <span onClick={func} className={styles.deleteBtn}>
          <img src={imgDelete} alt="" />
        </span>
      </div>
    );
  },
);
