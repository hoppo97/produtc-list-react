import React from 'react';
import { FormGroupProps } from '../../types/types';
import { Input } from '../UI/Input';
import { Label } from '../UI/Label';

import styles from './FormGroup.module.scss';
export const FormGroup: React.FC<FormGroupProps> = ({ item }) => {

  return (
    <>
      <div className={styles.group}>
        <Label labelText={item.labelText} id={item.id}/>
        <Input {...item} />
      </div>
    </>
  );
};
