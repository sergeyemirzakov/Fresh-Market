import React from 'react';
import { Product } from '../Product/Product';
import { getProducts } from '../../data';
import { Card } from '../Card/Card';

export const Products = () => {
  let data = getProducts();

  const [card, setCard] = React.useState([]);

  const onSetToCard = (product) => {
    setCard((c) => [...c, product]);
  };

  const onRemoveProductFromCard = (id) => {
    setCard((c) => c.filter((product) => product.id !== id));
  };

  return (
    <>
      <h2 style={{ marginBottom: '30px' }}>
        Choose only fresh and healthy products for your family
      </h2>
      {data.map((pr) => (
        <Product
          products={pr}
          key={pr.id}
          onSetToCard={(product) => onSetToCard(product)}
          onRemoveProductFromCard={(id) => onRemoveProductFromCard(id)}
        />
      ))}
      <Card card={card} />
    </>
  );
};
