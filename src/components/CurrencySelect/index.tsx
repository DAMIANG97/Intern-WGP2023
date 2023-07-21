import { FunctionComponent, useState } from 'react';

import Select from 'components/Select';

const options = ['USD', 'EUR', 'CNY', 'JPY'];

const CurrencySelect: FunctionComponent = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>('USD');

  return <Select options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
};

export default CurrencySelect;
