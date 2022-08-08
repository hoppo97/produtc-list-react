import React from 'react';
import { PropertiesFormGroup } from '../../../types/types';
import { ValidError } from '../../ValidError';

import styles from './Input.module.scss';

export const Input: React.FC<PropertiesFormGroup> = ({id, myInput, placeholder, name}) => {
  const isEmpty = () => {
    return  name === 'description'
    ? null
    : myInput.isDirty && myInput.isEmpty
  };
  return (
    <>
    <input
      className={
          isEmpty()
          ? styles.err
          : undefined
      }
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      value={myInput.value}
      onChange={(event) => myInput.onChange(event)}
      onBlur={() => myInput.onBlur()}
    />
    {isEmpty() && <ValidError />}
    </>
    
  )
};
