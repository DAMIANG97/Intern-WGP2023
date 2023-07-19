import { FunctionComponent, useState } from 'react';

import Select from 'components/Select';
const options = ['USD', 'EUR', 'CNY', 'JPY'];

interface CurrencySelectProps {
  theme?: string;
}
const CurrencySelect: FunctionComponent<CurrencySelectProps> = ({ theme }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>('USD');

  return (
    <Select theme={theme} options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
  );
};

export default CurrencySelect;
