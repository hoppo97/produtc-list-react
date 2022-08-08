import React from 'react'
import { LabelProps } from '../../../types/types';

export const Label: React.FC<LabelProps> = ({id, labelText}) => {
  return (
    <label htmlFor={id}>{labelText}</label>
  )
};
