import React from 'react';

import { useInput } from '../../hooks/useInput';
import { FormProps, PropertiesFormGroup } from '../../types/types';
import { FormGroup } from '../FormGroup';

import styles from './Form.module.scss';
export const Form: React.FC<FormProps> = React.memo(({ addProduct }) => {

  const productName = useInput('', { isEmpty: true });
  const imgLink = useInput('', { isEmpty: true });
  const price = useInput('', { isEmpty: true });
  const description = useInput('', { isEmpty: true });

  const propertiesFormGroup: PropertiesFormGroup[] = [
    {
      id: "1",
      myInput: productName,
      name: 'productName',
      labelText: 'Название товара',
      placeholder: 'Введите название товара',
    },
    {
      id: "2",
      myInput: description,
      name: 'description',
      labelText: 'Описание товара',
      placeholder: 'Введите описание товара',
    },
    {
      id: "3",
      myInput: imgLink,
      name: 'imgLink',
      labelText: 'Ссылка на изображение товара',
      placeholder: 'Введите ссылку',
    },
    {
      id: "4",
      myInput: price,
      name: 'price',
      labelText: 'Цена товара',
      placeholder: 'Введите цену товара',
    },
  ];

  const disabled = (): boolean => {
    return productName.isEmpty || price.isEmpty || imgLink.isEmpty;
  };

  const obj = {
    name: productName.value,
    imgLink: imgLink.value,
    price: Number(price.value),
    description: description.value,
  };

  const funcForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProduct(obj);
  };

  return (
    <form onSubmit={funcForm} className={styles.form}>
      {propertiesFormGroup.map((item) => (
        <FormGroup item={item} />
      ))}
      <button disabled={disabled()}>Добавить товар</button>
    </form>
  );
});
