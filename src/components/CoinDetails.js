// CoinDetails.js
import React from "react";

const CoinDetails = ({ coin }) => {
  if (!coin) return null;

  return (
    <div className="coin-details">
      <div className="coin-header">
        <h2 className="coin-name">
          {coin.name}
          <img
            src={coin.image}
            alt={coin.name}
            style={{ width: "2rem", marginLeft: "1rem" }}
          />
        </h2>
      </div>
      <div className="coin-info"></div>
      <div className="coin-info">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Price:</th>
              <td>{coin.current_price}</td>
            </tr>
            <tr>
              <th>Price Change (24h):</th>
              <td>{coin.price_change_percentage_24h}</td>
            </tr>
            <tr>
              <th>Total Volume (24h):</th>
              <td>{coin.total_volume}</td>
            </tr>
            <tr>
              <th>Market Cap:</th>
              <td>{coin.market_cap}</td>
            </tr>
            <tr>
              <th>Circulating Supply:</th>
              <td>{coin.circulating_supply}</td>
            </tr>
            {/* Agrega aquí las filas para mostrar otros datos adicionales en la tabla */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinDetails;
// Path: src\components\Search.js
