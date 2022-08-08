import React from 'react';
import './scss/app.scss';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { Products } from './types/types';
const PRODUCTS = [
  {
    id: 1,
    name: 'Фотоаппарат',
    description:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgLink: '/static/media/productImg.5ded1af33ace6a3bbcfe.jpg',
    price: 12000,
  },
  {
    id: 2,
    name: 'Фотоаппарат',
    description:
      'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    imgLink: './assets/img/productImg.jpg',
    price: 12000,
  },
];

function App() {
  const [products, setProducts] = React.useState<Products[]>([]);

  React.useEffect(() => {
    setProducts([...PRODUCTS]);
  }, []);

  const addProduct = React.useCallback((product: Products) => {
    const obj = {
      id: products.length + 1,
      ...product,
    };
    setProducts((prev) => [...prev, obj]);
  }, [products]);

  const deleteProduct = React.useCallback(
    (id: number | undefined) => {
      setProducts([...products.filter((item) => item.id !== id)]);
    },
    [products],
  );

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Form addProduct={addProduct} />
        {products.length > 0 ? (
          <ProductList products={products} deleteProduct={deleteProduct} />
        ) : (
          <h1>У вас нет товаров! Добавьте!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
