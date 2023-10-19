import React, { useEffect, useState } from 'react';
import { Container, H1, Equals } from './App.styled';
import CurrencyRow from './components/CurrencyRow/CurrencyRow';

const BASE_URL = 'https://api.frankfurter.app/latest';

export function App() {
  const [currencyOptions, setCurrencyOptins] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  console.log(currencyOptions);

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];

        setCurrencyOptins([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`).then(
        res => res.json().then(data => setExchangeRate(data.rates[toCurrency]))
      );
    }
  }, [fromCurrency, toCurrency]);

  function handleFromChangeAmount(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToChangeAmount(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <Container>
      <H1>Convert</H1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromChangeAmount}
        amount={fromAmount}
      />
      <Equals>to</Equals>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToChangeAmount}
        amount={toAmount}
      />
    </Container>
  );
}

export default App;
