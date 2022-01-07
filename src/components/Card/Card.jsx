import React from 'react';
import { Price } from '../Price/Price';
import './Card.css';

export const Card = ({ card }) => {
  return (
    <>
      <Price card={card} />
      <div>
        <h1>Your Card</h1>
        <ul className="card_items">
          {card.map((pr) => (
            <li className="card_item" key={pr.id}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span>{pr.item}</span>
                <span>{pr.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
