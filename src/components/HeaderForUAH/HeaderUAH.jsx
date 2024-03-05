import React, { useState, useEffect } from 'react';
import { Header } from './HeaderUAH.styled';

const HeaderUAH = () => {
  const exchange = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
  const [usdToUah, setUsdToUah] = useState(null);
  const [eurToUah, setEurToUah] = useState(null);

  useEffect(() => {
    fetch(`${exchange}`)
      .then(response => response.json())
      .then(data => {
        const usdRate = data.find(item => item.cc === 'USD');
        const eurRate = data.find(item => item.cc === 'EUR');

        if (usdRate) {
          setUsdToUah(usdRate.rate);
        }
        if (eurRate) {
          setEurToUah(eurRate.rate);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Header>
      <h2> Офіційний курс українськой гривні до доллару США</h2>
      <div>
        <p>USD к UAH: {usdToUah}</p>
        <p>EUR к UAH: {eurToUah}</p>
      </div>
    </Header>
  );
};

export default HeaderUAH;
