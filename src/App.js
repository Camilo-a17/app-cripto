// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';
import CoinDetails from './components/CoinDetails';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc'
      );
      setCoins(res.data);
    };

    getData();
  }, []);

  const handleCoinClick = (coin) => {
    setSelectedCoin(coin);
  };

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-glade-green text-black border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <TableCoins coins={coins} search={search} onCoinClick={handleCoinClick} />
        </div>
        <div className="col-md-6 mt-4">
          {selectedCoin && (
            <div className="card">
              <div className="card-body">
                <CoinDetails coin={selectedCoin} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
