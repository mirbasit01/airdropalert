
import React from 'react';
import './CryptoInfiniteScroll.css';

const data = [
  {
    name: 'Shiba Inu (SHIB)',
    price: '0.000023',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/11939/thumb/shiba.png',
  },
  {
    name: 'Bitcoin (BTC)',
    price: '35000.00',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png',
  },
  {
    name: 'Ethereum (ETH)',
    price: '2500.00',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png',
  },
  {
    name: 'Cardano (ADA)',
    price: '1.50',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/975/thumb/cardano.png',
  },
  {
    name: 'Ripple (XRP)',
    price: '0.60',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png',
  },
  {
    name: 'Dogecoin (DOGE)',
    price: '0.25',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/5/thumb/dogecoin.png',
  },
  {
    name: 'Litecoin (LTC)',
    price: '180.00',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/2/thumb/litecoin.png',
  },
  {
    name: 'Polkadot (DOT)',
    price: '25.00',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/12171/thumb/polkadot.png',
  },
  {
    name: 'Chainlink (LINK)',
    price: '30.00',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png',
  },
  {
    name: 'Stellar (XLM)',
    price: '0.35',
    imgSrc: 'https://coin-images.coingecko.com/coins/images/100/thumb/Stellar_symbol_black_RGB.png',
  },
];

const CryptoInfiniteScroll = () => {
  return (
    <div className="scroll-container-top">
      <div className="main-content">
        {data.map((coin, index) => (
          <div className="img-p" key={index}>
            <div className="coin-p-c">
              <div>
                <img
                  className="coin-img-m"
                  alt={coin.name}
                  src={coin.imgSrc}
                  height="25"
                />
              </div>
              {coin.name}
              <span
                data-price={coin.price}
                data-live-price={coin.name.toLowerCase().replace(' ', '-')}
                data-rate="1.000268"
                data-currency="USD"
                style={{ width: '9ch', textAlign: 'center', marginLeft: '1ch' }}
                data-timeout="1717966846983"
              >
                <b className="fiat-symbol">$</b> <span>{coin.price}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoInfiniteScroll;
