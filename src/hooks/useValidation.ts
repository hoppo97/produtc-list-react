import React from 'react'
import { Validations } from './types';

export const useValidation = (value: string, validations: Validations): Validations  => {

  const [isEmpty, setEmpty] = React.useState(true);

  React.useEffect (() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty' :
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  }, [value]);


  return {
    isEmpty
  }
}