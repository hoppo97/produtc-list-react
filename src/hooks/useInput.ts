import React from 'react'
import { useValidation } from './useValidation';
import { Validations } from './types';

export const useInput = (initialValue: string, validations: Validations) => {
  const [value, setValue] = React.useState<string>(initialValue);
  const [isDirty, setDirty] = React.useState<boolean>(false);
  const valid = useValidation(value, validations);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    setDirty(true)
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid
  }
}