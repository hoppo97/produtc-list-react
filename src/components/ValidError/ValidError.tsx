import React from 'react';

import styles from './ValidError.module.scss';

export const ValidError: React.FC = () => {
  return <p className={styles.err}>Поле является обязательным</p>;
};
