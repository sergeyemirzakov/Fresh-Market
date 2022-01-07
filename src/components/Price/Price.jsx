export const Price = ({ card }) => {
  let sum = 0;

  card.map(({ price }) => (sum += price));

  return (
    <>
      <div>
        <h1>Price: {sum}</h1>
      </div>
    </>
  );
};
