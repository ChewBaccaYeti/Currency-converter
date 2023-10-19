import React from 'react';
import { RowDiv, Input, Select } from './CurrencyRow.styled';

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <RowDiv>
      <Input
        type="number"
        value={amount ? String(amount) : ''}
        onChange={onChangeAmount}
      />
      <Select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Select>
    </RowDiv>
  );
}
