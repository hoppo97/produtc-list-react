export type Products = {
  id?: number | undefined;
  name: string;
  description: string;
  imgLink: string;
  price: number;
}

export type MyInput = {
  isEmpty: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  isDirty: boolean;
}

export interface PropertiesFormGroup  {
  id: string,
  myInput: MyInput,
  name: string,
  labelText: string,
  placeholder: string
}

export interface FormGroupProps {
  item: PropertiesFormGroup
}


export interface FormProps {
  addProduct: (obj: Products) => void;
}

export interface ProductsListProps  {
  products: Products[];
  deleteProduct: (id: number | undefined) => void;
};

export interface LabelProps {
  id: string,
  labelText: string
};

export interface ProductsItemProps {
  id?: number;
  name: string;
  description: string;
  imgLink: string;
  price: number;
  func: () => void;
}
