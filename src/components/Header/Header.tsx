import React from 'react';

import styles from './Header.module.scss';

export const Header: React.FC = React.memo(() => {
  return (
    <header className={styles.header}>
      <h1>Добавление товара</h1>
    </header>
  );
});
