// CoinRow.js
import React from 'react';

const CoinRow = ({ coin, index, onCoinClick }) => {
  const handleClick = () => {
    onCoinClick(coin);
  };

  return (
    <tr className="cursor-pointer" onClick={handleClick}>
      <td className="text-norway">{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ width: '2rem', marginRight: '1rem' }}
        />
        <span className="text-tom-thumb">{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>
      <td className="text-norway">{coin.current_price}</td>
      <td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
        {coin.price_change_percentage_24h}
      </td>
      <td className="text-norway">{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;

