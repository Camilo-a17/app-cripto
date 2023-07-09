// TableCoins.js
import React from 'react';
import CoinRow from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

const TableCoins = ({ coins, search, onCoinClick }) => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (!coins) return <div>no coins</div>;

  return (
    <table className="table mt-4 table-hover">
      <thead>
        <tr>
          {titles.map((title, i) => (
            <th key={i} className="text-norway">{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow key={coin.id} coin={coin} index={index + 1} onCoinClick={onCoinClick} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
