import React from 'react';
import './Product.css';

export const Product = ({ products, onSetToCard, onRemoveProductFromCard }) => {
  const [done, setDone] = React.useState(false);

  const onAddToCardHanlder = (e) => {
    setDone(true);
    e.stopPropagation();
    onSetToCard(products);
  };

  const onRemoveCheck = (id) => {
    setDone(false);
    onRemoveProductFromCard(id);
  };

  return (
    <>
      <div className="product">
        <div className="product_name">{products.name}</div>
        <div className="product_img">{products.item}</div>
        <div className="product_price">Price: {products.price}</div>
        <div style={{ display: 'flex' }}>
          <button disabled={done} onClick={onAddToCardHanlder}>
            {done ? '✔️' : ''}Add to card
          </button>
          {done ? <button onClick={() => onRemoveCheck(products.id)}>❌</button> : ''}
        </div>
      </div>
    </>
  );
};
