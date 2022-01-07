import { v4 as uuidv4 } from 'uuid';

const products = [
  {
    id: uuidv4(),
    item: '🍏',
    price: 3,
    name: 'Apple',
  },
  {
    id: uuidv4(),
    item: '🍊',
    price: 5,
    name: 'Orange',
  },
  {
    id: uuidv4(),
    item: '🍅',
    price: 2,
    name: 'Tomato',
  },
  {
    id: uuidv4(),
    item: '🍍',
    price: 2,
    name: 'Pineapple',
  },
];

export function getProducts() {
  return products;
}
